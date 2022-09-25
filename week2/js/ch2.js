// Ch2.
console.log( "Chapter 2" ) ;

// Primitive Data Types.
console.log( "Examples of Data Types" ) ;

// String.
console.log( typeof "Hello" ) ;

// Number.
console.log( typeof 10 ) ;

// Boolean.
console.log( typeof true ) ;

// Objects.
console.log( typeof { ninja : "turtle" } ) ;
console.log( typeof [ 1, 2, 3 ] ) ;

// String Properties and Methods.
console.log( "Examples of String Properties and Methods" ) ;

// Property.
const personName = "Alexa" ;
console.log( personName.length ) ;

// Methods.
console.log( personName.toUpperCase() ) ;
console.log( personName.startsWith( "A" ) ) ;
console.log( "          Hello World         ".trim() ) ;

// Template Literals.
console.log( "Examples of Template Literals" ) ;

console.log( `She said, "It's Me!"` ) ; 

const newName = `Siri` ;
console.log( `Hello ${ newName }!` ) ;

const age = 39 ;
console.log( `I will be ${ age + 1 } next year` ) ;

// Changing The Value of Variables.
console.log( "Changing the Value of Variables" ) ;

// Initialize points score to zero.
let points = 0 ;
console.log( points ) ;
points = points + 10 ;
console.log( points ) ;
points += 10 ;
console.log( points ) ;

// Decrease points by 5.
points -= 5 ;
console.log( points ) ;

// Double points.
points *= 2 ;
console.log( points ) ;

// Divide value of points by 3.
points /= 3 ;
console.log( points ) ;

// Changes the value of points to the remainder if its current value is divided by 7.
points %= 7 ;
console.log( points ) ;

// Converting Strings to Numbers.
console.log( "Examples of Converting Strings to Numbers" ) ;

// String to Number.
console.log( Number( "23" ) ) ;

// Converting Numbers to Strings.
console.log( "Examples of Converting Numbers to Strings" ) ;

// Number to String with String function.
console.log( String( 3 ) ) ;

// Number to String with toString() method.
console.log( 10..toString() ) ;