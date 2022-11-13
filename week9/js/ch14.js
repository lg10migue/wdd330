// Ch14.
console.log( "Chapter 14" ) ;

// The data- Attribute.
console.log( "Examples of The data- Attribute" ) ;

const superman = document.getElementById( "hero" ) ;
const powers = superman.dataset.powers ;
console.log( powers ) ;

// HTML5 Web Storage.
console.log( "Examples of HTML5 Web Storage" ) ;

// Local Storage Methods.
localStorage.setItem( "name", "Walter White" ) ;
const name = localStorage.getItem( "name" ) ;
console.log( name ) ;

// Local Storage Assignment.
localStorage.newName = "Heisenberg" ;
console.log( localStorage.newName ) ;

// Remove data from Local Storage.
// localStorage.removeItem( "name" ) ;
// delete localStorage.newName ;

// Completely remove everything stored in localStorage.
// localStorage.clear() ;

// Geolocation.
console.log( "Examples of Geolocation" ) ;

// navigator.geolocation.getCurrentPosition( youAreHere ) ;
// function youAreHere( position ) {
//     console.log( `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}` ) ; 
// } ;

// Websockets.
console.log( "Examples of Websockets" ) ;

const URL = "wss://echo.websocket.org/" ;
const outputDiv = document.getElementById( "output" ) ;
const form = document.forms[0] ;
const connection = new WebSocket( URL ) ;

connection.addEventListener( "open", () => {
    output( "CONNECTED" ) ;
}, false ) ;

function output( message ) {
    const para = document.createElement( "p" ) ;
    para.innerHTML = message ;
    outputDiv.appendChild( para ) ;
} ;

form.addEventListener( "submit", message, false ) ;

function message( event ) {
    event.preventDefault() ;
    const text = form.message.value ;
    output( `SENT: ${text}` ) ;
    connection.send( text ) ;
} ;

connection.addEventListener( "message", ( event ) => {
    output( `RESPONSE: ${event.data}` ) ;
}, false ) ;

connection.addEventListener( "close", () => {
    output( "DISCONNECTED" ) ;
}, false ) ;

connection.addEventListener( "error", ( event ) => {
    output( `<span style='color: red;'>ERROR: ${event.data}</span>` ) ;
}, false ) ;

// Notifications.
console.log( "Examples of Notifications" ) ;

// if ( window.Notification ) {
//     Notification.requestPermission()
//     .then( ( permission ) => {
//         if ( Notification.permission === "granted" ) {
//             const notification = new Notification( "Hello World from JavaScript!",{
//                 body: "Try to search in Google",
//                 icon: "images/b9r5sEL.jpg"
//             } ) ;
//         } ;
//     } ) ;
// } ;

// notification.addEventListener( "click", () => {
//     window.open( "https://google.com" )
// }, false ) ;

// Drawing with Canvas.
console.log( "Examples of Drawing with Canvas" ) ;

const canvasElement = document.getElementById( "canvas" ) ;
const context = canvasElement.getContext( "2d" ) ;
context.fillStyle = "#0000cc" ; // A blue fill color.
context.strokeStyle = "#ccc" ; // A gray stroke color.
context.lineWidth = 4 ;

// Filled Rectangle. 
context.fillRect( 10, 10, 100, 50 ) ;

// No Filled Rectangle.
context.strokeRect( 10, 100, 100, 50 ) ;

// T Shape.
context.beginPath() ;
context.moveTo( 130, 50 ) ;
context.lineTo( 180, 50 ) ;
context.moveTo( 155, 50 ) ;
context.lineTo( 155, 90 ) ;
context.strokeStyle = "#c00" ;
context.lineWidth = 15 ;
context.stroke() ;

// Circle.
context.beginPath() ;
context.arc( 200, 200, 30, 0, Math.PI * 2, false ) ;
context.strokeStyle = "#ff0" ;
context.lineWidth = 4 ;
context.stroke() ;

// Text.
context.fillStyle = "#0c0" ; // A blue fill color.
context.font = "bold 26px sans-serif" ;
context.fillText( "Hello", 20, 200) ;