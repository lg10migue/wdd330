// Ch7.
console.log( "Chapter 7" ) ;

// Event Listeners.
console.log( "Examples of Event Listeners" ) ;

// The Event Object.
const clickParagraph = document.getElementById( "click" ) ;
// clickParagraph.addEventListener( "click", doSomething ) ;

// Types of Event, Event Target & Coordinates of an Event.
function doSomething( e ) {
    console.log( "Something Happened!" ) ;
    console.log( e.type ) ;
    console.log( e.target ) ;
    console.log(`screen: (${e.screenX},${e.screenY}), page: (${e.pageX},${e.pageY}), client: (${e.screenX},${e.screenY})`) ;
} ;

// Mouse Events.

// Click.
clickParagraph.addEventListener( 'click',() => console.log( 'click' ) ) ;
clickParagraph.addEventListener( 'mousedown',() => console.log( 'down' ) ) ;
clickParagraph.addEventListener( 'mouseup',() => console.log( 'up' ) ) ;

// Double Click.
const dblclickParagraph = document.getElementById( "dblclick" ) ;
dblclickParagraph.addEventListener( "dblclick", highlight ) ;

function highlight( event ) {
    event.target.classList.toggle( "highlight" ) ;
} ;

const mouseParagraph = document.getElementById( "mouse" ) ;

// Mouse Over.
mouseParagraph.addEventListener( "mouseover", highlight ) ;

// Mouse Out.
mouseParagraph.addEventListener( "mouseout", highlight ) ;

// Mouse Move.
// mouseParagraph.addEventListener( "mousemove", () => console.log( "You Moved!" ) ) ;

// Keyboard Events.
addEventListener( "keydown", highlight ) ;
addEventListener( 'keyup', ( event ) => console.log( `You stopped pressing the key on ${ new Date } `) ) ;
addEventListener( 'keypress', ( event ) => console.log( `You pressed the ${ event.key } character` ) ) ;

// Modifier Keys.
addEventListener( 'keydown', ( event ) => console.log(`You pressed the ${ event.key } character` ) ) ;

// Check if user pressed the "C" key while holding down the "Ctrl" key.
// addEventListener( 'keydown', ( event ) => {
//     if ( event.key === 'c' && event.ctrlKey ) {
//         console.log( 'Action canceled!' ) ;
//     } ;
// } ) ;

// Check if the "Shift" key was held down when the mouse was clicked.
// addEventListener( 'click', ( event ) => {
//     if ( event.shiftKey ) {
//         console.log( 'A Shifty Click!' ) ;
//     } ;
// } ) ;

// Touch Events.
// addEventListener( 'touchend', () => console.log( 'Touch stopped' ) ) ;

// Removing Event Listeners.
const onceParagraph = document.getElementById( 'once' ) ;
onceParagraph.addEventListener( 'click', remove ) ;

function remove( event ) {
    console.log( 'Enjoy this while it lasts!' ) ;
    onceParagraph.style.backgroundColor = 'pink' ;
    onceParagraph.removeEventListener( 'click', remove ) ;
} ;


// Stopping Default Behavior.
const brokenLink = document.getElementById( 'broken' ) ;

brokenLink.addEventListener( 'click', ( event ) => {
    event.preventDefault() ;
    console.log( 'Broken Link!' ) ;
} ) ;

// Event Propagation.
// Bubbling.
ulElement = document.getElementById( 'list' ) ;
liElement = document.querySelector( '#list li' ) ;

// ulElement.addEventListener( 'click', ( event ) =>
// console.log( 'Clicked on ul' ) ) ;

// liElement.addEventListener( 'click', ( event ) =>
// console.log( 'Clicked on li' ) ) ;

// Capturing.
// ulElement.addEventListener( 'click', ( event ) =>
// console.log( 'Clicked on ul' ), true ) ;

// liElement.addEventListener( 'click', ( event ) =>
// console.log( 'Clicked on li' ), true ) ;

// Both.
// Capturing.

ulElement.addEventListener( 'click', ( event ) =>
console.log( 'Clicked on ul' ), true ) ;

liElement.addEventListener( 'click', ( event ) =>
console.log( 'Clicked on li' ), true ) ;

// Bubbling.

ulElement.addEventListener( 'click', ( event ) =>
console.log( 'Clicked on ul' ), false ) ;

liElement.addEventListener( 'click', ( event ) =>
console.log( 'Clicked on li' ), false ) ;

// Stopping the Bubbling Phase.
// liElement.addEventListener( 'click', ( event ) => {
//     console.log( 'clicked on li' ) ;
//     event.stopPropagation() ;
// }, false ) ;

// Event Delegation.
const ulElement2 = document.getElementById( "list2" ) ;
ulElement2.addEventListener( 'click', highlight ) ;