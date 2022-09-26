// Ch3.
console.log( "Chapter 3" ) ;

// Arrays.
console.log( "Example of Arrays" ) ;

console.log( [ 1, 2, 3, 4 ] ) ;

// Initializing an Array.
console.log( "Examples of Initializing an Array" ) ;
const heroes = [] ;

console.log( heroes ) ; 

// Adding Values to Arrays.
console.log( "Examples of Adding Values to Arrays" ) ;

heroes[0] = "Superman" ;

console.log( heroes ) ;

// Creating Arrays Literals.
console.log( "Examples of Arrays Literals" ) ;

let avengers = [ 'Captain America', 'Iron Man', 'Thor', 'Hulk' ] ;

console.log( avengers ) ;

// Removing Values from Arrays.
console.log( "Examples of Removing Values from Arrays" ) ;

delete avengers[3] ;

console.log( avengers ) ;

// Destructuring Arrays.
console.log( "Examples of Destructuring Arrays" ) ;

const [ x, y ] = [ 1, 2 ] ;

console.log( x ) ;
console.log( y ) ;

// Arrays Properties and Methods.
console.log( "Examples of Arrays Properties and Methods" ) ;

// Length.
console.log( avengers.length ) ;

// Pop.
console.log( avengers.pop() ) ;

// Shift.
console.log( avengers.shift() ) ;

// Push.
console.log( avengers.push( "Black-Panter" ) ) ;

// Unshift.
console.log( avengers.unshift( "Captain America" ) ) ;

// Merging Arrays.
console.log( "Examples of Merging Arrays" ) ;

// Concat.
console.log( avengers.concat( [ 'Hulk','Hawkeye', 'Black Widow' ] ) ) ;

// Concat creates a new array, but don't modify the existent one, to do so, you need to assign it to the existent one.
console.log( avengers ) ;

avengers = avengers.concat( [ 'Hulk','Hawkeye', 'Black Widow' ] ) ;

console.log( avengers ) ;

// Spread Operator.
avengers = [ ...avengers, ...[ 'Spider-Man' ] ] ;

console.log( avengers ) ;

// Join.
console.log( "Examples of Join Method" ) ;

console.log( avengers.join() ) ;

// Multidimensional Arrays.
console.log( "Examples of Multidimensional Arrays" ) ; 
const coordinates = [ [ 1, 3 ], [ 4, 2 ] ] ;
console.log( coordinates ) ;

console.log( coordinates[0][0] ) ;
console.log( coordinates[1][0] ) ;

// Sets.
console.log( "Examples of Sets" ) ;
const moreNumbers = new Set( [ 7, 7, 7, 7, 7, 8, 8, 8, 9, 9 ] ) ;
console.log( moreNumbers ) ;

// Conveting Sets to Arrays.
console.log( "Examples of Converting Sets to Arrays" ) ;
const moreNumbersArray = [ ...moreNumbers ] ;
console.log( moreNumbersArray ) ;

const shoppingSet = new Set().add( 'Apples' ).add( 'Bananas' ).add( 'Beans' ) ;
console.log( shoppingSet ) ;
const shoppingArray = Array.from( shoppingSet ) ;
console.log( shoppingArray ) ;

// Maps.
console.log( "Examples of Maps" ) ;
const heroes1 = new Map( [ [ 'Clark Kent', 'Superman' ], [ 'Bruce Wayne', 'Batman' ] ] ) ;
console.log( heroes1 ) ;

// Converting Maps to Arrays.
console.log( "Examples of Converting Maps to Arrays" ) ;
const heroesArray = [ ...heroes1 ] ;
console.log( heroesArray ) ;

const romanNumerals = new Map( [ [ 2,'II' ], [ 3,'III' ], [ 4,'IV' ], [ 5,'V' ] ] ) ;
console.log( romanNumerals ) ;
const romanNumeralsArray = Array.from( romanNumerals ) ;
console.log( romanNumeralsArray ) ;

// if - else Statements.
console.log( "Examples of if - else Statements" ) ;
const n = 12 ;
if ( n % 2 === 0 ) {
    console.log( 'n is an even number' ) ;
} else {
    console.log( 'n is an odd number' ) ;
} ;

// Ternary Operator.
console.log( "Examples of Ternary Operator" ) ;
const num = 5 ;

num % 2 === 0 ? console.log( 'num is an even number' ) : console.log( 'num is an odd number' ) ;

console.log( `num is a ${ ( num % 2 === 0 ) ? 'even' : 'odd' } number` ) ;

// Switch Statements.
console.log( "Example of Switch Statements" ) ;

switch ( num ) {
    case 4:
    console.log( 'You rolled a four' ) ;
    break ;
    case 5:
    console.log( 'You rolled a five' ) ;
    break ;
    case 6:
    console.log( 'You rolled a six' ) ;
    break ;
    default:
    console.log( 'You rolled a number less than four' ) ;
    break ;
} ;

// While Loops.
console.log( "Examples of While Loops" ) ;

let bottles = 10 ;
while ( bottles > 0 ){
    console.log( `There were ${ bottles } green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${ bottles - 1 } green bottles hanging on the wall` ) ;
    bottles-- ;
} ;

// Example 2.
console.log( "Example 2" ) ;

let bottles2 = 11 ;
while ( --bottles2 ){
    console.log(`There were ${ bottles2 } green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${ bottles2 - 1 } green bottles hanging on the wall` ) ;
} ;

// do ... while Loops.
console.log( "Examples of do ... while Loops" ) ;

let bottles3 = 10 ;
do {
    console.log( `There were ${ bottles3 } green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${ bottles3 - 1 } green bottles hanging on the wall` ) ;
    bottles3-- ;
} while ( bottles3 > 0 ) ;

// For Loops.
console.log( "Examples of For Loops" ) ;

for ( let bottles = 10 ; bottles > 0 ; bottles-- ) {
    console.log( `There were ${ bottles } green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${ bottles - 1 } green bottles hanging on the wall` ) ;
} ;

// Example 2.
console.log( "Example 2" ) ;

let bottles4 = 10 ; // Bottles is initialized here instead.
for ( ; bottles4 > 0 ; ) { // Empty initialization and increment.
    console.log( `There were ${ bottles4 } green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${ bottles4 - 1 } green bottles hanging on the wall` ) ;
    bottles4-- ; // Increment moved into code block.
} ;

// Nested for Loops.
console.log( "Examples of Nested for Loops" ) ;

for ( let i = 1 ; i < 13 ; i++ ) {
    for ( let j = 1 ; j < 13 ; j++ ) {
        console.log( `${ j } multiplied by ${ i } is ${ i * j }` ) ;
    } ;
} ;

// Looping over Arrays.
console.log( "Examples of Looping over Arrays" ) ;

for ( let i = 0, max = avengers.length ; i < max ; i++ ) {
    console.log( avengers[i] ) ;
} ;

// Example 2.
console.log( "Example 2" ) ;

for ( const value of avengers ) {
    console.log( value ) ;
} ;

// Looping over Sets.
console.log( "Examples of Looping over Sets" ) ;

const letters = new Set( 'hello' ) ;
for ( const letter of letters ) {
    console.log( letter ) ;
} ;

// Looping over Maps.
console.log( "Examples of Looping over Maps" ) ;
console.log( romanNumerals ) ;

// Looping over keys.
console.log( "Example Looping over Keys" ) ;
for ( const key of romanNumerals.keys() ) {
    console.log( key ) ;
} ;

// Looping over values.
console.log( "Example looping over Values" ) ;
for ( const value of romanNumerals.values() ) {
    console.log( value ) ;
} ;

// Looping over both the key and value.
console.log( "Example looping over both the Key and Value" ) ;
for ( const [ key, value ] of romanNumerals.entries() ) {
    console.log( `${ key } in Roman numerals is ${ value }` ) ;
} ;