// Requirement 1.
function requirementOne() {
    const input = document.getElementById( "requirement1Input" ).value ;
    const outputElement = document.getElementById( "requirement1Output" ) ;
    outputElement.innerHTML = `You entered: ${ input }` ;
} ;

// Requirement 2.
function requirementTwo() {
    const input = document.getElementById( "requirement2Input").value ;
    const outputElement = document.getElementById( "requirement2Output" ) ;

    // Transform input to a number.
    const inputInt = parseInt( input ) ;
    if ( inputInt !== NaN ) {
        outputElement.innerHTML = `Total: ${ sumUpTo( inputInt ) }` ;
    } ;
} ;

// Function to sum all numbers up to the number provided.
function sumUpTo( number ) {
    let total = 0 ;
    for ( let i = 1 ; i <= number ; i++ ) {
        total += i ;
    } ;
    return total ;
} ;

// Requirement 3.
function add() {
    const number1 = document.getElementById( "requirement3Input" ).value ;
    const number2 = document.getElementById( "requirement3Input2" ).value ;
    const outputElement = document.getElementById( "requirement3Output" ) ;

    const num1Float = parseFloat(number1) ;
    const num2Float = parseFloat(number2) ;
    if ( ( num1Float !== NaN ) & ( num2Float !== NaN ) ) {
        const total = num1Float + num2Float ;
        outputElement.innerHTML = `Total: ${ total }` ;
    } ;
} ;

// Stretch Goals.

// Function declaration.
function sub( num1, num2 ) {
    return num1 - num2 ;
} ;

// Function expression.
const add2 = function( num1, num2 ) {
    return num1 + num2 ;
} ;

// Arrow function.
const mult = ( num1, num2 ) => num1 * num2 ;

// DRY.
function getNum( numId ) {
    const number = document.getElementById( numId ).value ;
    const numberFloat = parseFloat( number ) ;
    if ( numberFloat !== NaN ) {
        return numberFloat ;
    } else return 0 ;
} ;

function updateTotal( value ) {
    const outputElement = document.getElementById( "stretchOutput" ) ;
    outputElement.innerHTML = `Total: ${ value }` ;
} ;

// Callback function.
function doOperation( operation ) {
    const total = operation(
        getNum( "stretchInput1" ),
        getNum( "stretchInput2" )
    ) ;
    updateTotal( total ) ;
} ;