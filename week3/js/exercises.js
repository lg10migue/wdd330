// Ch14: The Document Object Model.
console.log( "Chapter 14: The Document Object Model" ) ;

// Build A Table.
console.log( "Build A Table" ) ;

const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
] ;

console.log( MOUNTAINS ) ;

function buildTable( data ) {
    let table = document.createElement( "table" ) ;

    let fields = Object.keys( data[0] ) ;
    let headRow = document.createElement( "tr" ) ;
    fields.forEach( function( field ) {
        let headCell = document.createElement( "th" ) ;
        headCell.appendChild( document.createTextNode( field.toUpperCase() ) ) ;
        headRow.appendChild( headCell ) ;
    } ) ;
    table.appendChild( headRow ) ;

    data.forEach( function( object ) {
        let row = document.createElement( "tr" ) ;
        fields.forEach( function( field ) {
            let cell = document.createElement( "td" ) ;
            cell.appendChild( document.createTextNode( object[field] ) ) ;
            if ( typeof object[field] == "number" ) {
            cell.style.textAlign = "right" ;
            } ;
            row.appendChild( cell ) ;
        } ) ;
        table.appendChild( row ) ;
    } ) ;
    return table ;
} ;

document.querySelector( "#mountains" ).appendChild( buildTable( MOUNTAINS ) ) ;

// Elements By A Tag Name.
console.log( "Elements By Tag Name" ) ;

function byTagName( node, tagName ) {
    let childs = [] ;
    tagName = tagName.toUpperCase() ;

    function allDescendant( node ) {
        for ( let i = 0 ; i < node.childNodes.length ; i++ ) {
            let child = node.childNodes[i] ;
            if ( child.nodeType == document.ELEMENT_NODE ) {
                if ( child.nodeName == tagName ) childs.push( child ) ;
                allDescendant( child ) ;
            } ;
        } ;
    } ;
    allDescendant( node ) ;
    return childs ;
} ;

console.log( byTagName( document.body, "h3" ).length ) ;
console.log( byTagName( document.body, "span" ).length ) ;
let para = document.querySelector( "#paragr" ) ;
console.log( byTagName( para, "span" ).length ) ;

// The Cat's Hat.
console.log( "The Cat's Hat" ) ;

let cat = document.querySelector( "#cat" ) ;
let hat = document.querySelector( "#hat" ) ;
let button = document.querySelector( "#animation" ) ;

let angle = 0 ;
let lastTime = null ;
function animate( time ) {
    if ( lastTime != null ) angle += ( time - lastTime ) * 0.001 ;
    lastTime = time ;
    cat.style.top = ( Math.sin( angle ) * 40 + 40 ) + "px" ;
    cat.style.left = ( Math.cos( angle ) * 200 + 230 ) + "px" ;
    hat.style.top = ( Math.sin( angle + Math.PI ) * 40 + 40 ) + "px" ;
    hat.style.left = ( Math.cos( angle + Math.PI ) * 200 + 230 ) + "px" ;
    requestAnimationFrame( animate ) ;
} ;

button.addEventListener( "click", () => requestAnimationFrame( animate ) ) ;

// Ch15: Handling Events.
console.log( "Chapter 15: Handling Events" ) ;

// Balloon.
console.log( "Balloon" ) ;

const balloon = document.querySelector( "#balloon" ) ;
let size ;

const changeSize = ( newSize ) =>  { size = newSize ; balloon.style.fontSize = `${size}px` } ; 

changeSize( 20 ) ;
function handleArrow( event ) {
    if ( event.key == "ArrowUp" ) {
        if ( size > 70 ) {
            balloon.textContent = "💥" ;
            document.body.removeEventListener( "keydown", handleArrow ) ;
        } else {
            changeSize( size * 1.1 ) ;
            event.preventDefault() ;
        } ;
    } else if ( event.key == "ArrowDown" ) {
        changeSize( size * 0.9 ) ;
        event.preventDefault() ;
    } ;
} ;

document.body.addEventListener( "keydown", handleArrow ) ;

// Mouse Trial.
console.log( "Mouse Trial" ) ;

let dots = [] ;
for ( let i = 0 ; i < 12 ; i++ ) {
    let node = document.createElement( "div" ) ;
    node.className = "trail" ;
    document.body.appendChild( node ) ;
    dots.push( node ) ;
} ;
let currentDot = 0 ;  
window.addEventListener( "mousemove", event => {
    let dot = dots[currentDot] ;
    dot.style.left = ( event.pageX - 8 ) + "px" ;
    dot.style.top = ( event.pageY - 8 ) + "px" ;
    currentDot = ( currentDot + 1 ) % dots.length ;
} ) ;

// Tabs.
console.log( "Tabs" ) ;

function asTabs( node ) {
    let tabs = Array.from( node.children ).map( node => {
        let button = document.createElement( "button" ) ;
        button.textContent = node.getAttribute( "data-tabname" ) ;
        let tab = { node, button } ;
        button.addEventListener( "click", () => selectTab( tab ) ) ;
        return tab ;
    } ) ;
  
    let tabList = document.createElement( "div" ) ;
    for ( let { button } of tabs ) tabList.appendChild( button ) ;
    node.insertBefore( tabList, node.firstChild ) ;
    function selectTab( selectedTab ) {
        for ( let tab of tabs ) {
            let selected = tab == selectedTab ;
            tab.node.style.display = selected ? "" : "none" ;
            tab.button.style.color = selected ? "red" : "" ;
            tab.button.style.backgroundColor = selected ? "blue" : "" ;
        } ;
    } ;
    selectTab( tabs[0] ) ;
} ;

asTabs( document.querySelector( "tab-panel" ) ) ;