// Ch8.
console.log( "Chapter 8" ) ;

// Accesing Form Elements.
console.log( "Examples of Accessing Form Elements" ) ;

const form = document.forms[0] ;
// const form = document.forms.search ;
// const form = document.forms.[ "search" ] ;

console.log( form ) ;

console.log( form.elements ) ;

// const input = form.elements[0] ;
const input = form.searchInput ;
// const input = form[ "searchInput" ] ;
console.log( input ) ;

// Form Propertiess and Methods.
console.log( "Form Properties and Methods" ) ;

// The form.submit() method will submit the form automatically without trigger the form submit event.
// form.submit() ;

// The form.reset() method will reset ALL the form controls back to their initial values.
// form.reset() ;

// The form.action() property can be used to set the action attribute of a form.
console.log( form.action ) ;
form.action = "notes.html" ;
console.log( form.action ) ;

// Form Events.
console.log( "Examples of Form Events" ) ;

// The focus event occurs when an element is focused on.
input.addEventListener( "focus", () => console.log( "Focused" ), false ) ;

// The blur event occurs when the user moves the focus away from the form element.
input.addEventListener( "blur", () => console.log( "Blurred" ), false ) ;

// The change event occurs when the user moves the focus away from the form element after changing it.
input.addEventListener( "change", () => console.log( "Changed" ), false ) ;

// Submitting a Form.
console.log( "Examples of Submitting a Form" ) ;

form.addEventListener( "submit", search, false ) ;

// function search( event ) {
//     console.log( "Form Submitted" ) ;
//     alert( "Form Submitted" ) ;
//     event.preventDefault() ;
// } ;

// Retrieving and Changing Values From a Form.
console.log( "Examples of Retrieving and Changing Values From a Form" ) ;

function search( event ) {
    alert( `You searched for: ${ input.value }` ) ;
    event.preventDefault() ;
} ;

// Form Controls.
console.log( "Examples of Form Controls" ) ;

const heroForm = document.forms[ "heroForm" ] ;
heroForm.addEventListener( "submit", makeHero, false ) ;

function makeHero( event ) {
    event.preventDefault() ; // Prevent the form from being submitted.

    const hero = {} ; // Create an empty object.

    // Text Input Fields.
    hero.name = heroForm.heroName.value ; // Create a name property based on the input field's value.

    // Password Input Fields.
    hero.realName = heroForm.realName.value ; // Create a real name property.

    // Checkbox Input Fields.
    // hero.powers = [] ;
    // for ( let i = 0 ; i < heroForm.powers.length ; i++ ) {
    //     if ( heroForm.powers[i].checked ) {
    //         hero.powers.push( heroForm.powers[i].value ) ;
    //     } ;
    // } ;
    hero.powers = [ ...heroForm.powers ].filter( box => box.checked ).map( box => box.value ) ;

    // Radio Button Input Fields.
    hero.category = heroForm.category.value ;

    // Number Input Fields.
    hero.age = heroForm.age.value ;

    // Select Drop-Down List.
    hero.city = heroForm.city.value ;

    // Text Areas.
    hero.origin = heroForm.origin.value ;

    alert( JSON.stringify( hero) ) ; // Convert object to JSON string and display in alert dialog.
    return hero ;
} ;

// Form Validation.
console.log( "Examples of Form Validation" ) ;

heroForm.addEventListener( 'submit', validate, false ) ;
heroForm.heroName.addEventListener( "keyup", validateInline, false ) ;

function validate( event ) {
    const firstLetter = heroForm.heroName.value[0] ;
    if ( firstLetter.toUpperCase() === 'X' ) {
        event.preventDefault() ;
        alert( 'Your name is not allowed to start with X!' ) ;
    } ;
} ;

const label = heroForm.querySelector( 'label' ) ;
const error = document.createElement( 'div' ) ;
error.classList.add( 'error' ) ;
error.textContent = '! Your name is not allowed to start with X.' ;
label.append( error ) ;

function validateInline() {
    const heroName = this.value.toUpperCase() ;
    if( heroName.startsWith('X') ) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none' ;
    } ;
} ;

// Disabling the Submit Button.

heroForm.heroName.addEventListener( 'keyup', disableSubmit, false ) ;

function disableSubmit( event ) {
    if ( event.target.value === '' ) {
        document.getElementById( 'submit' ).disabled = true ;
    } else {
        document.getElementById( 'submit' ).disabled = false ;
    } ;
} ;