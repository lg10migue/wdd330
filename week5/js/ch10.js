// Ch10.
console.log( "Chapter 10" ) ;

// Errors, Exceptions, and Warnings.
console.log( "Examples of Errors, Exceptions, and Warnings" ) ;

// Exceptions.
// unicorn() ;

// Stack Traces.
// function three() { unicorn(); } ;
// function two() { three(); } ;
// function one() { two(); } ;
// one() ;

// Warnings.
// pi = 3.142 ;

// Strict Mode.
// "use strict" ;
// e = 2.718 ;
// console.log( e ) ;

function strictly() {
    "use strict" ;
    e = 2.718 ;
    console.log( e ) ;
} ;

// strictly() ;

// Error Objects.
console.log( "Examples of Error Objects" ) ;

const error = new Error( "Oops, something went wrong" ) ;
console.log( error ) ;

// Throwing Exceptions.
console.log( "Examples of Throwing Exceptions" ) ;

function squareRoot( number ) {
    "use strict" ;
    if ( number < 0 ) {
        throw new RangeError( "You can't find the square root of negative numbers" ) ;
    } ;
    return Math.sqrt( number ) ;
} ;

// console.log( squareRoot( 121 ) ) ;
// console.log( squareRoot( -1 ) ) ;

// Exception Handling.
console.log( "Examples of Exception Handling" );

function imaginarySquareRoot( number ) {
    "use strict" ;
    let answer ;
    try {
        answer = String( squareRoot( number ) ) ;
    } catch( error ) {
        answer = squareRoot( -number ) + "i" ;
    } finally {
        return `+ or - ${answer}` ;
    } ;
} ;

// Testst.
console.log( "Examples of Tests" ) ;

function itSquareRoots4() {
    return squareRoot( 4 ) === 2 ;
} ;

console.log( itSquareRoots4( 4 ) ) ;