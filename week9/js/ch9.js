// Ch9.
console.log( "Chapter 9" ) ;

// The Browser Object Model.
console.log( "Examples of The Browser Object Model" ) ;

console.log( window ) ;

// Going Global.
console.log( "Examples of Going Global" ) ;

x = "Test Global Variable" ; 
console.log( x ) ;
console.log( window.x === x ) ;
console.log( window.x ) ;

// Dialogs.
console.log( "Examples of Dialogs" ) ;

// let test = window.alert( "Hello" ) ;
// console.log( test ) ;

// let test = window.confirm( "Do you wish to continue?" ) ;
// console.log( test ) ;

// let userName = window.prompt( "Please enter your name:" ) ;
// console.log( userName ) ;

// Browser Information.
console.log( "Examples of Browser Information" ) ;

console.log( window.navigator ) ;
console.log( window.navigator.userAgent ) ;

// Location, Location, Location.
console.log( "Examples of Location, Location, Location" ) ;

console.log( window.location ) ;
console.log( window.location.toString() ) ;
console.log( window.location.href ) ;
console.log( window.location.protocol ) ;
console.log( window.location.host ) ;
console.log( window.location.hostname ) ;
console.log( window.location.port ) ;
console.log( window.location.pathname ) ;
console.log( window.location.search ) ;
console.log( window.location.origin ) ;

// The Browser History.
console.log( "Examples of The Browser History" ) ;

console.log( window.history ) ;
console.log( window.history.length ) ;

// The window.history.go() method can be used to go to a specific page, where 0 is the current page.
// console.log( window.history.go( 1 ) ) ; // Goes back 1 page.

// Controlling Windows.
console.log( "Examples of Controling Windows" ) ;

// const popup = window.open( "https://google.com", "Google Test", "width=400,height=400,resizable=yes" ) ;
// popup.moveTo( 50, 50 ) ;
// popup.resizeTo( 600, 400 ) ;
// popup.close() ;

// Screen Information.
console.log( "Examples of Screen Information" ) ;

console.log( window.screen.height ) ;
console.log( window.screen.width ) ;
console.log( window.screen.availHeight ) ;
console.log( window.screen.availWidth ) ;
console.log( window.screen.colorDepth ) ;

// The Document Object.
console.log( "Examples of The Document Object" ) ;

// document.write( "Hello World from JS!" ) ;
// document.write( "<h1>Hello World from JS!</h1>" ) ;

// Cookies.
console.log( "Examples of Cookies" ) ;

document.cookie = "name=Spider-Man" ;
document.cookie = "hero=true" ;
console.log( document.cookie ) ;

const cookies = document.cookie.split( "; " ) ;
for ( crumb of cookies ) {
    const [ key, value ] = crumb.split( "=" ) ;
    console.log( `The value of ${key} is ${value} `) ;
} ;

// Timing Functions.
console.log( "Examples of Timing Functions" ) ;

// setTimeout().
// const id = window.setTimeout( () => console.log( "Time's Up!" ), 3000  ) ;
// window.clearTimeout( id ) ;

// setInterval().
// const summon = window.setInterval( () => console.log( "Beetlejuice" ), 1000 ) ;
// window.clearInterval( summon ) ;

// Animations.
console.log( "Examples of Animation" ) ;

const squareElement = document.getElementById( "square" ) ;
let angle = 0 ;

setInterval( () => {
    angle = ( angle + 2 ) % 360 ;
    squareElement.style.transform = `rotate(${angle}deg)` ;
}, 1000 / 60 ) ;

const squareElement2 = document.getElementById( "square2" ) ;
let angle2 = 0 ;

function rotate() {
    angle2 = ( angle2 + 2 ) % 360 ;
    squareElement2.style.transform = `rotate(${angle2}deg)` ;
    window.requestAnimationFrame( rotate ) ;
}

const id = requestAnimationFrame( rotate ) ;
// cancelAnimationFrame( id ) ;