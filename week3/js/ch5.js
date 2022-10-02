// Ch5.
console.log( "Chapter 5" ) ;

// Objects Literals.
console.log( "Examples of Objects Literals" ) ;

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: [ 'Batman','Supergirl','Superboy' ],
    fly() {
        return 'Up, up and away!' ;
    }
} ;

console.log( superman ) ;

// Shorthand method of creating objects if a property key is the same as a variable name.
const heroName = "Iron Man" ;
const realName = "Tony Stark" ;

// Long way.
// const ironMan = { name: name, realName: realName } ;

// Short ES6 way.
const ironMan = { heroName, realName } ;

console.log( ironMan ) ;

// Accesing Properties.
console.log( "Examples of Accesing Properties" ) ;

console.log( ironMan.heroName ) ;

// Calling Methods.
console.log( "Examples of Calling Methods" ) ;

console.log( superman.fly() ) ;

// Checking if Properties or Methods Exist.
console.log( "Examples of Checking if Properties or Methods Exist" ) ;

console.log( "city" in superman ) ;
console.log( superman.city !== undefined ) ;

// hasOwnProperty() method.
console.log( superman.hasOwnProperty( "city" ) ) ;
console.log( superman.hasOwnProperty( "name" ) ) ;

// Finding all the Properties of an Object.
console.log( "Examples of Finding all the Properties of an Object" ) ;

// For in.
for ( const key in superman ) {
    console.log( key + ": " + superman[key] ) ;
} ;

// Only an object's own properties are returned.
for ( const key in superman ) {
    if ( superman.hasOwnProperty( key ) ) {
        console.log( key + ": " + superman[key] ) ;
    } ;
} ;

// Object.keys().
for ( const key of Object.keys( superman ) ) {
    console.log( key ) ;
} ;

// Object.values().
for ( const value of Object.values( superman ) ) {
    console.log( value ) ;
} ;

// Object.entries().
for ( const [key,value] of Object.entries( superman ) ) {
    console.log( `${key}: ${value}` ) ;
} ;

// Adding Properties.
console.log( "Examples ofAdding Properties" ) ;

superman.city = "Metropolis" ;

console.log( superman ) ;

// Changing Properties.
console.log( "Examples of Changing Properties" ) ;

superman[ "real name" ] = "Kal-El" ;

console.log( superman ) ;

// Removing Properties.
console.log( "Examples of Removing Properties" ) ;

delete superman.fly ;

console.log( superman ) ;

// Nested Objects.
console.log( "Examples of Nested Objects" ) ;

const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
} ;

console.log( jla.wonderWoman.realName ) ;
console.log( jla[ "flash" ][ "realName" ] ) ;
console.log( jla.aquaman[ "realName" ] ) ;

// Objects as Parameters to Functions.
console.log( "Objects as Parameters to Functions" ) ;

function greet( { greeting, name, age } ) {
    return `${ greeting }! My name is ${ name } and I am ${ age } years old.` ;
} ;

console.log( greet( { greeting: `What's up dude`, age: 10, name: `Bart` } ) ) ;

function greet2( { greeting = 'Hello', name, age = 18 } ) {
    return `${ greeting }! My name is ${ name } and I am ${ age } years old.` ;
} ;

console.log( greet2( { name: 'Lisa', age: 8 } ) ) ;

// this.
console.log( "Examples of 'this'" ) ;

const dice = {
    sides: 6,
    roll() {
        return Math.floor( this.sides * Math.random() ) + 1 ;
    }
} ;

console.log( dice.roll() ) ;
console.log( dice.roll() ) ;

// Namespacing.
console.log( "Examples of Namespacing" ) ;

const myMaths = {
    square( x ) {
        return x * x ;
    },
    mean( array, callback ) {
        if ( callback ) {
        array.map( callback ) ;
        } ;
        const total = array.reduce( ( a, b ) => a + b ) ;
        return total / array.length ;
    }
} ;

console.log( myMaths.square( 3 ) ) ;
console.log( myMaths.mean( [ 1, 2, 3 ] ) ) ;

// Built-in Objects.
console.log( "Examples of Built-in Objects" ) ;

// JSON.
console.log( "Examples of JSON" ) ;

// JSON string.
const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}' ;
console.log( batman ) ;

// parse() method. JSON -> JS object.
console.log( JSON.parse( batman ) ) ;

// stringify() method. JS object -> JSON.
const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        console.log('You will tell the truth!');
    }
} ;

console.log( wonderWoman ) ;
console.log( JSON.stringify( wonderWoman ) ) ;

// The Math Object.
console.log( "Examples of The Math Object" ) ;

console.log( Math.PI ) ;

// Mathematical Methods.
console.log( "Examples of Mathematical Methods" ) ;

// Math.abs() method returns the absolute value of a number( positive ).
console.log( Math.abs( 3 ) ) ;
console.log( Math.abs( -4.6 ) ) ;

// Rounding Methods.
console.log( "Examples of Rounding Methods" ) ;

// Math.ceil() method will round up to the next integer.
console.log( Math.ceil( 4.2 ) ) ;
console.log( Math.ceil( 8 ) ) ;
console.log( Math.ceil( -4.2 ) ) ;

// Math.floor() method will round down to the next integer.
console.log( Math.floor( 4.2 ) ) ;
console.log( Math.floor( 8 ) ) ;
console.log( Math.floor( -4.2 ) ) ;

// Math.trunc() method returns the integer part of a number.
console.log( Math.trunc( 4.9 ) ) ;
console.log( Math.trunc( -4.2 ) ) ;

// Powers and Roots.
console.log( "Examples of Powers and Roots" ) ;

// Math.exp() method will raise a number to the power of Euler's constant.
console.log( Math.exp( 1 ) ) ;
console.log( Math.exp( 0 ) ) ;
console.log( Math.exp( -3 ) ) ;

// Math.pow() method will raise any number( first arg ) to the power of another number( second arg ).
console.log( Math.pow( 3, 2 ) ) ;
console.log( Math.pow( 4.5, 0 ) ) ;
console.log( Math.pow( 27, 1/3 ) ) ;

// Math.sqrt() method return the positive square root of a number.
console.log( Math.sqrt( 121 ) ) ;
console.log( Math.sqrt( 2 ) ) ;
console.log( Math.sqrt( -1 ) ) ; // Imaginary numbers aren't supported.

// Math.cbrt() method returns the cube root of numbers.
console.log( Math.cbrt( 8 ) ) ;
console.log( Math.cbrt( -1000 ) ) ;

// Math.hypot() method returns the square root of the sum of the squares of all its arguments.
console.log( Math.hypot( 3, 4 ) ) ;
console.log( Math.hypot( 2, 3, 6 ) ) ;

// Logarithmic Methods.
console.log( "Examples of Logarithmic Methods" ) ;

// Math.log() method returns the natural logarithm of a number.
console.log( Math.log( Math.E ) ) ;
console.log( Math.log( 1 ) ) ;
console.log( Math.log( 0 ) ) ;

// Maximum & Minimum Methods.
console.log( "Examples of Maximum and Minimum Methods" ) ;

// Math.max() method returns the maximum number from its arguments.
console.log( Math.max( 1, 2, 3 ) ) ;
console.log( Math.max( Math.PI, Math.SQRT2, Math.E ) ) ;

// Math.min() method returns the minimum number for its arguments.
console.log( Math.min( 1, 2, 3 ) ) ;
console.log( Math.min( Math.PI, Math.SQRT2, Math.E ) ) ;

// Trigonometric Functions.
console.log( "Example of Trigonometric Functions" ) ;

// Math.sin() method returns the sine of an angle.
console.log( Math.sin( Math.PI / 6 ) ) ;

// Math.cos() method returns the cosine of an angle.
console.log( Math.cos( Math.PI / 6 ) ) ;

// Math.tan() method returns the tangent of an angle.
console.log( Math.tan( Math.PI / 4 ) ) ; // Rounding error, should be 1.
console.log( Math.tan( Math.PI / 2 ) ) ;

// Math.asin() method returns the arcsine of a number.
console.log( Math.asin( 1 ) ) ;

// Math.acos() returns the arccosine of a number.
console.log( Math.acos( 0.5 ) ) ;

// Random Numbers.
console.log( "Examples of Random Numbers" ) ;

// Math.random() method will generate a number between 0 and 1.
console.log( Math.random() ) ;

// Generating a random decimal number between 0 and another number.
console.log( 6 * Math.random() )

// Generating a random integer number between 0 and another number.
console.log( Math.floor( Math.random() * 6 ) ) ;

// The Date Object.
console.log( "Examples of The Date Object" ) ;

const today = new Date() ;
console.log( today ) ;

// Creating dates with arguments.
const christmas = new Date( "2017 12 25" ) ;
console.log( christmas ) ;

// Getter Methods.
console.log( "Examples of Getter Methods" ) ;

// getDay() and getUTCDay() methods are used to find the day of the week. Starting at 0 for Sunday, up to 6 for Saturday.
console.log( christmas.getDay() ) ;

// getDate() and getUTCDate() methods return the day of the month.
console.log( christmas.getDate() ) ;

// getMonth() and getUTCMonth() methods return month. Starting 0 for January, up to 11 for December.
console.log( christmas.getMonth() ) ;

// getFullYear() and getUTCFullYear() methods return the year.
console.log( christmas.getFullYear() ) ;

// getTime() method return a timestamp of milliseconds since the Epoch.
console.log( christmas.getTime() ) ;

// Incrementing one day.
console.log( new Date( christmas.getTime() + 1000 * 60 * 60 * 24 ) ) ;

// getTimezoneOffset() methods returns the difference, in minutes, between local time on the computer and UTC.
console.log( new Date().getTimezoneOffset() ) ;

// Setter Methods.
console.log( "Examples of Setter Methods" ) ;

// setDate() method sets the day.
christmas.setDate( 15 ) ;

// setMonth() method sets the month.
christmas.setMonth( 04 ) ;

// setFullYear() method sets the year.
christmas.setFullYear( 1995 ) ;

console.log( christmas ) ;

// The RegExp Object.
console.log( "Examples of The RegExp Object" ) ;

const pattern = /[a-zA-Z]+ing$/ ;
const pattern2 = new RegExp( "[a-zA-Z]+ing" ) ;
const language = "JavaScript" ;
const pattern3 = new RegExp( language ) ;

console.log( pattern ) ;
console.log( pattern2 ) ;
console.log( pattern3 ) ;

// RegExp Methods.
console.log( "Examples of RegExp Methods" ) ;

// test() method returns true if a string matches the regular expression pattern.
console.log( pattern.test( "joke" ) ) ;3
console.log( pattern.test( "joking" ) ) ;

// exec() methods returns an array with the first match found.
console.log( pattern.exec( "joke" ) ) ;
console.log( pattern.exec( "joking" ) ) ;