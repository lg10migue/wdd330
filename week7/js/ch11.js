// Ch11.
console.log( "Chapter 11" ) ;

// Functions Properties and Methods.
console.log( "Examples of Functions Properties and Methods" ) ;

function square( x ) {
    return x * x ;
} ;

// The length property.
console.log( square.length ) ;

// Call and Apply Methods.
console.log( "Examples of Call and Apply Methods" ) ;

// The call() method can be used to set the value of this
// inside a function to an object that is provided as the first argument.
function sayHello() {
    return `Hello, my name is ${ this.name }` ;
} ;

const clark = { name: 'Clark' } ;
const bruce = { name: 'Bruce' } ;

console.log( sayHello.call( clark ) ) ;
console.log( sayHello.call( bruce ) ) ;

// Same as before but with parameters.
function sayHello2( greeting = "Hello" ) {
    return `${ greeting }, my name is ${ this.name }` ;
} ;

console.log( sayHello2.call( clark, "How do you do" ) ) ;
console.log( sayHello2.call( bruce ) ) ;

// If a function doesn’t refer to an object as this in its body, it can still
// be called using the call() method, but you need provide null as its first argument.

console.log( square.call( null, 4) ) ;

// The apply() method works in the same way, except the arguments of
// the function are provided as an array, even if there is only one argument.
console.log( square.apply( null, [4] ) ) ;

// Custom Properties.
console.log( "Examples of Custom Properties" ) ;

square.description = "Squares a number that is provided as an argument" ;

console.log( square.description ) ;

// Memoization.
console.log( "Examples of Memoization" ) ;

function cacheSquare( x ) {
    cacheSquare.cache = cacheSquare.cache || {} ;
    if ( ! cacheSquare.cache[x] ) {
        cacheSquare.cache[x] = x * x ;
    } ;
    return cacheSquare.cache[ x ] ;
} ;

console.log( cacheSquare( 3 ) ) ;
console.log( cacheSquare( -11 ) ) ;
console.log( cacheSquare.cache ) ;

// Immediately Invoked Function Expressions.
console.log( "Immediately Invoked Function Expressions" ) ;
( function() {
    const temp = "World" ;
    console.log( `Hello ${temp}` ) ;
} )() ;

// Temporary Variables.
console.log( "Examples of Temporary Variables" ) ;
let a = 1 ;
let b = 2 ;

( () => {
    const temp = a ;
    a = b ;
    b = temp ;
} ) () ;

console.log( a ) ;
console.log( b ) ;
// console.log( temp ) ;

// Destructuring.
console.log( "Examples of Destructuring" ) ;
let [ c, d ] = [ 1, 2 ] ;
[ c, d ] = [ d, c ]
console.log( c ) ;
console.log( d ) ;

// Initialization Code.
console.log( "Examples of Initialization Code" ) ;

// An IIFE can be used to set up any initialization code that there’ll be no need for again.
( function() {
    const name = 'Miguel López' ; // This might be obtained from a cookie in reality.
    const days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday' ] ;
    const date = new Date(), today = days[ date.getDay() ] ;
    console.log( `Welcome back ${name}. Today is ${today}.` ) ;

} ) () ;

// Note that much of this can be achieved in ES6 by simply placing the code inside a block.
{
    const name = 'Miguel López' ; // This might be obtained from a cookie in reality.
    const days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday' ] ;
    const date = new Date(), today = days[ date.getDay() ] ;
    console.log( `Welcome back ${name}. Today is ${today}.` ) ;
} ;

// Safe Use of Strict Mode.
console.log( "Examples of Safe Use of Strict Mode" ) ;
( function() {
    "use strict" ;

// All the code in strict mode would go inside this function.

} ) () ;

// Creating Self-contained Code Blocks.
console.log( "Examples of Creating Self-contained Code Blocks" ) ;
( function() {
    // Block A.
    const name = "Block A" ;
    console.log( `Hello from ${name}` ) ;
    } () ) ;

    ( function() {
    // Block B.
    const name = "Block B" ;
    console.log( `Hello from ${name}` ) ;
} () ) ;

// Functions that Define and Rewrite Themselves.
console.log( "Examples of Functions that Define and Rewrite Themselves" ) ;

function party() {
    console.log( "Wow this is amazing!" ) ;
    party = function() {
        console.log( "Been there, got the T-Shirt" ) ;
    } ;
} ;

// If the function is also assigned to another variable, this variable will
// maintain the original function definition and not be rewritten.
const beachParty = party ; 

// Function Redefinition.
party() ;
party() ;

// This function hasn't been redefined.
beachParty() ;

// Init-Time Branching.
console.log( "Examples of Init-Time Branching" ) ;

function ride() {
    if ( window.unicorn ) { 
        ride = function() {
            // Some code that uses the brand new and sparkly unicorn methods.
            return "Riding on a unicorn is the best!" ;
        } ;
    } else {
        ride = function() {
            // Some code that uses the older pony methods.
            return "Riding on a pony is still pretty good" ;
        } ;
    } ;
    return ride() ;
} ;

console.log( ride() ) ;
console.log( ride ) ;

// Recursive Functions.
console.log( "Examples of Recursive Functions" ) ;

// Calculate the factorial number.
console.log( "Factorial Number" ) ;

function factorial( n ) {
    if ( n === 0 ) {
        return 1 ;
    } else {
        return n * factorial( n - 1 ) ;
    } ;
} ;

console.log( factorial( 5 ) ) ;

// The Collatz Conjecture.
console.log( "Collatz Conjecture" ) ;

function collatz( n, sequence = [ n ] ) {
    if ( n === 1 ) {
        return `Sequence took ${sequence.length} steps. It was ${sequence}` ;
    }

    if ( n % 2 === 0 ) {
        n = n / 2 ;
    } else { 
        n = 3 * n + 1 ;
    }

    return collatz( n, [ ...sequence , n ] ) ;
} ;

console.log( collatz( 10 ) ) ;

// Event-driven Asynchronous Programming.
console.log( "Examples of Event-driven Asynchronous Programming" ) ;

function wait( message, callback, seconds ) {
    setTimeout( callback, seconds * 1000 ) ;
    console.log( message ) ;
} ;

function selfDestruct() {
    console.log( "BOOOOM!" ) ;
} ;

wait( "This tape will self-destruct in five seconds ... ", selfDestruct, 5 ) ;
console.log( "Hmmm, should I accept this mission or not ... ?" ) ;

// Promises.
console.log( "Examples of Promises" ) ;

// Example of Creating a Promise.
// const promise = new Promise( ( resolve, reject ) => {
//     // Initialization code goes here.
//     if ( success ) {
//         resolve( value ) ;
//     } else {
//         reject( error ) ;
//     } ;
// } ) ;

const dice = {
    sides: 6,
    roll() {
        return Math.floor( this.sides * Math.random() ) + 1 ;
    }
}
    
console.log( 'Before the roll' ) ;
    
const roll = new Promise( ( resolve, reject ) => {
    const n = dice.roll() ;
    if ( n > 1 ) {
        setTimeout( () => { resolve( n ) }, n * 200 ) ;
    } else {
        setTimeout( () => reject( n ), n * 200 ) ;
    } ;
} ) ;
    
roll.then( result => console.log( `I rolled a ${result}` ) )
.catch( result => console.log( `Drat! ... I rolled a ${result}` ) ) ;
    
console.log( 'After the roll' ) ;

// Generalized Functions.
console.log( "Examples of Generalized Functions" ) ;

function random( a, b, callback ) {
    if ( b === undefined ) b = a, a = 1 ; // If only one argument is supplied, assume the lower limit is 1.
    let result = Math.floor( ( b - a + 1 ) * Math.random() ) + a ;
    if ( callback ) {
        result = callback( result ) ;
    } ;
    return result ;
} ;

console.log( random( 6 ) ) ;
console.log( random( 1, 10, square ) ) ;

// Functions That Return Functions.
console.log( "Examples of Functions That Return Functions" ) ;

function returnHello() {
    console.log( "returnHello() called" ) ;
    return function() {
        console.log( "Hello World!" ) ;
    } ;
} ;

returnHello() ;
const hello = returnHello() ;
hello() ;

// Function Scope.
console.log( "Examples of Function Scope" ) ;

function outer() {
    const outside = 'Outside!' ;
    function inner() {
        const inside = 'Inside!' ;
        console.log( inside ) ;
        console.log( outside ) ;
    } ;
    console.log( outside ) ;
    inner() ;
} ;

outer() ;

// Practical Example.
// A closure is formed when a function returns another function that then
// maintains access to any variables created in the original function’s scope.
function closure() {
    const a = 1.8 ;
    const b = 32 ;
    return c => c * a + b ;
} ;

const toFahrenheit = closure() ;
console.log( toFahrenheit( 30 ) ) ;

// Counter Example.
// Closures not only have access to variables declaredin a parent function's scope,
// they can also change the value of these variables.
function counter( start ) {
    let i = start ;
    return function() {
        return i++ ;
    } ;
} ;

const count = counter( 1 ) ;
console.log( count() ) ;
console.log( count() ) ;
console.log( count() ) ;

// Generators.
console.log( "Examples of Generators" ) ;

// Fibonacci Sequence.
// A sequence that starts with two numbers and the next number is obtained by adding
// the two previous numbers together.
function* fibonacci( a, b ) {
    let [ prev, current ] = [ a, b ] ;
    while( true ) {
        [ prev, current ] = [ current, prev + current ] ;
        yield current ;
    } ;
} ;

const sequence = fibonacci( 1, 1 ) ;
console.log( sequence.next() ) ;
console.log( sequence.next() ) ;
console.log( sequence.next() ) ;

// Iterate over the generator.
for ( n of sequence ) {
    // Stop the sequence after it reaches 100.
    if ( n > 100 ) break ;
    console.log( n ) ;
} ;

// Pure Functions.
console.log( "Examples of Pure Functions" ) ;

function reverse( string ) {
    return string.split( "" ).reverse().join( "" ) ;
} ;

const message = "Hello JavaScript" ;
console.log( reverse( message  ) ) ;

// Higher-Order Functions.
console.log( "Examples of Higher-Order Functions" ) ;

// Higher-order functions are functions that accept another
// function as an argument, or return another function as a result, or both.
function multiplier( x ) {
    return function( y ) {
        return x * y ;
    } ;
} ;

// Doubler.
doubler = multiplier( 2 ) ;
console.log( doubler( 10 ) ) ;

// Tripler.
tripler = multiplier( 3 ) ;
console.log(  tripler( 10 ) ) ;

// Currying.
console.log( "Examples of Currying" ) ;

// Function that allows it to be curried so it returns another function if only one argument is provided.
function multiplierCurried( x, y ) {
    if ( y === undefined ) {
        return function( z ) {
        return x * z ;
        } ;
    } else {
        return x * y ;
    } ;
} ;

const calcTax = multiplierCurried( 0.22 ) ;
console.log( calcTax( 400 ) ) ;