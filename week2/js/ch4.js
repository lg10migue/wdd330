// Ch4.
console.log( "Chapter 4" ) ;

// Function Declarations.
function hello(){
    console.log( 'Hello World!' ) ;
} ;

hello() ;

// Function Expressions.
const goodbye = function(){
    console.log( 'Goodbye World!' ) ;
} ;

goodbye() ;

// Return Values.
function howdy(){
    return 'Howdy World!' ;
} ;

console.log( howdy() ) ;

// Variable Numbers of Arguments.
console.log( "Example of Variable Numbers of Arguments" )

// Rest operator.
function rest(...args){
    for( arg of args){
        console.log( arg ) ;
    } ;
} ;

rest( 2,4,6,8 ) ;

// Default Parameters.
console.log( "Example of Default Parameters" )
function hello2( name='World' ) {
    console.log( `Hello ${name}!` ) ;
} ;

hello2() ;
hello2( "Universe" ) ;

// Arrow Functions.
const square = x => x*x ;

// Callbacks.
console.log( "Example of Callbacks" ) ;

function sing(song,callback) {
    console.log( `I'm singing along to ${song}.` ) ;
    callback() ;
} ;

function dance() {
    console.log("I'm moving my body to the groove.");
} ;

sing( 'Let It Go', dance ) ;