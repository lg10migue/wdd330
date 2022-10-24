import { qs, onTouch } from "./utilities.js" ;
import { readFromLS, writeToLS } from "./ls.js" ;

let liveToDos = null ;

// Save To Do list in Local Storage.
function saveToDo( value, key ) {
    const newToDo = {
        id : new Date().getTime(),
        content : value,
        completed : false
    } ;

    liveToDos.push( newToDo ) ;
    writeToLS( key, liveToDos ) ;
} ;

// Get the To Do list.
function getToDos( key, completed = null ) {
    if ( liveToDos === null ) {
        liveToDos = readFromLS( key ) || [] ;
    } ;
    if ( completed === null ) {
        return liveToDos ;
    } else {
        return liveToDos.filter( task => task.completed === completed ) ; 
    } ;
} ;

// Remove To Do Task.
function removeToDo( taskId, key ) {
    let newList = liveToDos.filter( task => task.id != taskId ) ;
    liveToDos = newList ;
    writeToLS( key, liveToDos ) ;
} ;

// Render the tasks left display.
function renderTasksCounter( view, pendings ) {
    const counterElement = qs( "#counter" ) ;
    if ( view ) {
        counterElement.innerHTML = "0 Tasks Left" ;
    } else if ( pendings === 1 ) {
        counterElement.innerHTML = `${pendings} Task Left` ;
    } else {
        counterElement.innerHTML = `${pendings} Tasks Left` ;
    }
} ;

// Construct To Do List.
function renderList( list, element, toDos ) {
    element.innerHTML = "" ;
    let pendingTasks = 0 ;

    list.forEach( toDo => {
        const item = document.createElement( "li" ) ;
        if ( toDo.completed ) {
            item.innerHTML = `<input type="checkbox" checked><label><strike>${toDo.content}</strike></label><button class="delete">X</button>` ;
        } else {
            item.innerHTML = `<input type="checkbox"><label>${toDo.content}</label><button class="delete">X</button>` ;
            pendingTasks ++ ;
        } ;

        // Event listener for delete button.
        let deleteElement = item.querySelector( ".delete" ) ;
        deleteElement.addEventListener( "click", () => toDos.deleteToDo( toDo.id ) ) ;

        // Event listener for checkbox button.
        let completedElement = item.querySelector( "input" ) ;
        completedElement.addEventListener( "change", () => toDos.completeToDo( toDo.id ) ) ;

        element.appendChild( item ) ;
    } ) ;
    renderTasksCounter( toDos.view, pendingTasks ) ;
} ;

// ToDos Class.
export default class ToDos {
    constructor( listElement, key ) {
        this.listElement = listElement ;
        this.key = key ;
        this.view = null ;

        // Add button.
        onTouch( "#addToDo", this.addToDo.bind( this ), false ) ;
        this.listToDos() ;

        // All button.
        onTouch( "#all-tasks", this.listToDos.bind( this, null ) ) ;

        // Active.
        onTouch( "#active-tasks", this.listToDos.bind( this, false ) ) ;

        // Completed button.
        onTouch( "#completed-tasks", this.listToDos.bind( this, true ) ) ;
    } ;

    addToDo() {
        const task = qs( "#newToDo" ) ;
        saveToDo( task.value, this.key ) ;
        task.value = "" ;
        this.listToDos() ;
    } ;

    listToDos( flag = null ) {
        this.view = flag ;
        renderList( getToDos( this.key, flag ), this.listElement, this ) ;
    } ;

    deleteToDo( id ) {
        removeToDo( id, this.key ) ;
        renderList( getToDos( this.key, this.view ), this.listElement, this ) ;
    } ;

    findToDo( id ) {
        const task = liveToDos.find( task => task.id === id ) ;
        return task ;
    } ;

    completeToDo( id ) {
        const task = this.findToDo( id ) ;
        task.completed = !task.completed ;
        writeToLS( this.key, liveToDos ) ;
        renderList( getToDos( this.key, this.view ), this.listElement, this ) ;
    } ;
} ;