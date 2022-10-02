// Ch2: Program Structure.
console.log( "Chapter 2: Program Structure" ) ;

// Looping A Triangle.
console.log( "Looping A Triangle" ) ;

let triangle = "" ;

while ( triangle.length <= 6 ) {
    triangle += "#" ;
    console.log( triangle  ) ;
} ;

// FizzBuzz.
console.log( "FizzBuzz" ) ;

for ( let i = 1 ; i <= 100 ; i++ ) {
    console.log( i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i ) ;
} ;

// ChessBoard.
console.log( "ChessBoard" ) ;

let size = 8 ;
let board = "" ;

for ( let y = 0 ; y < size ; y++ ) {
    for ( let x = 0 ; x < size ; x++ ) {
        if ( ( x + y ) % 2 === 0 ) {
            board += " " ;
        } else {
            board += "#" ;
        } ;
    } ;
    board += "\n" ;
} ;

console.log( board ) ;

// Ch3: Functions.
console.log( "Chapter 3: Functions" ) ;

// Minimum.
console.log( "Minimum" ) ;

function min ( num1, num2 ) {
    if ( num1 < num2 ) {
        return num1 ;
    } else {
        return num2 ;
    } ;
} ;

console.log( min( 0, 10 ) ) ;
console.log( min( 0, -10 ) ) ;

// Recursion.
console.log( "Recursion" ) ;

function isEven( number ) {
    if ( number === 0 ) return true ;
    else if ( number === 1 ) return false ;
    else if ( number < 0 ) return isEven( -number ) ;
    else return isEven( number - 2 ) ;
} ;

console.log( isEven( 50 ) ) ;
console.log( isEven( 75 ) ) ;
console.log( isEven( -1 ) ) ;

// Bean Counting.
console.log( "Bean Counting" ) ;

function countBs( string ) {
    return countChar( string, "B" ) ;
} ;

function countChar( string, pattern ) {
    let counter = 0 ;
    for ( let i = 0 ; i < string.length ; i++ ) {
        if ( string[ i ] === pattern ) counter += 1 ;
    } ;
    return counter ;
} ;

console.log( countBs( "BBC" ) ) ;
console.log( countChar( "kakkerlak", "k" ) ) ;

// Ch4: Data Structures: Objects and Arrays.
console.log( "Chapter 4: Data Structures: Objects and Arrays" ) ;

// The Sum of a Range.
console.log( "The Sum of a Range" ) ;

function range( start, end, step = start < end ? 1 : -1 ) {
    rangeArray = [] ;
    if ( step > 0 ) {
        for ( let i = start ; i <= end ; i += step ) {
            rangeArray.push( i ) ;
        } ;
    } else {
        for ( let i = start ; i >= end ; i += step ) {
            rangeArray.push( i ) ;
        } ;
    } ;
    return rangeArray ;
} ;

function sum( numbersArray ) {
    let total = 0 ;
    for ( const n of numbersArray ) {
        total += n ;
    } ;
    return total ;
} ;

console.log( range( 1, 10 ) ) ;
console.log( range( 5, 2, -1 ) ) ;
console.log( sum( range( 1, 10 ) ) ) ;

// Reversing an Array.
console.log( "Reversing an Array" ) ;

function reverseArray( array ) {
    let newArray = [] ;
    for ( const i of array ) {
        newArray.unshift( i ) ;
    } ;
    return newArray ;
} ;

function reverseArrayInPlace( array ) {
    for ( let i = 0 ; i < Math.floor( array.length / 2 ) ; i++ ) {
        let temp = array[i] ;
        array[i] = array[array.length - ( 1 + i ) ] ;
        array[array.length - ( 1 + i ) ] = temp ;
      } ;
      return array ;
} ;

console.log( reverseArray( [ "A", "B", "C" ] ) ) ;
let arrayValue = [ 1, 2, 3, 4, 5 ] ;
console.log( arrayValue ) ;
reverseArrayInPlace( arrayValue ) ;
console.log( arrayValue ) ;

// A List.
console.log( "A List" ) ;

function arrayToList( array ) {
    let list = null ;
    for ( const i of array.reverse() ) {
        list = { value : i, rest : list } ;
    } ;
    return list ;
} ;

function listToArray( list ) {
    let array = [] ;
    for ( let i = list ; i ; i = i.rest ) {
        array.push( i.value ) ;
    } ;
    return array ;
} ;

function prepend( value, list ) {
    return { value, rest : list } ;
} ;

function nth( list, num ) {
    if ( !list ) return undefined ;
    else if ( num == 0 ) return list.value ;
    else return nth( list.rest, num - 1 ) ;
} ;

console.log( arrayToList( [ 10, 20 ] ) ) ;
console.log( listToArray( arrayToList( [ 10, 20, 30 ] ) ) ) ;
console.log( prepend( 10, prepend( 20, null ) ) ) ;
console.log( nth( arrayToList( [ 10, 20, 30 ] ), 1 ) ) ;

// Deep Comparison.
console.log( "Deep Comparison" ) ;

function deepEqual( obj1, obj2 ) {
    if ( obj1 === obj2 ) {
        return true ;
    } else if ( obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object" ) {
        return false ;
    } else {
        let obj1Keys = Object.keys( obj1 ) ;
        let obj2Keys = Object.keys( obj2 ) ;
        if ( obj1Keys.length != obj2Keys.length ) {
            return false ;
        } else {
            for ( let key of obj1Keys ) {
                if ( ! obj2Keys.includes( key ) || ! deepEqual( obj1[key], obj2[key] ) ) return false ;
            } ;
        } ;
        return true ;
    } ;
} ;

let obj = { here : { is : "an" }, object : 2 } ;
console.log( deepEqual( obj, obj ) ) ;
console.log( deepEqual( obj, { here : 1, object : 2 } ) ) ;
console.log( deepEqual( obj, { here : { is : "an" }, object : 2 } ) ) ;