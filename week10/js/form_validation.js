// Client-side form validation.

console.log( "Client-side form validation" ) ;

// Example with constraint validation API.
console.log( "Example with constraint validation API" ) ;

const form = document.querySelector( "#form-two" ) ;
const email = document.getElementById( "mail" ) ;
const emailError = document.querySelector( "#mail + span.error" ) ;

email.addEventListener( "input", ( event ) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if ( email.validity.valid ) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = "" ; // Reset the content of the message.
        emailError.className = "error" ; // Reset the visual state of the message.
    } else {
        // If there is still an error, show the correct error.
        showError() ;
    } ;
} ) ;

form.addEventListener( "submit", ( event ) => {
    // If the email field is valid, we let the form submit.
    if ( ! email.validity.valid ) {
        // If it isn't, we display an appropriate error message.
        showError() ;
        // Then we prevent the form from being sent by canceling the event.
        event.preventDefault() ;
    } ;
});

function showError() {
    if ( email.validity.valueMissing ) {
        // If the field is empty, display the following error message.
        emailError.textContent = "You need to enter an e-mail address." ;
    } else if ( email.validity.typeMismatch ) {
        // If the field doesn't contain an email address, display the following error message.
        emailError.textContent = "Entered value needs to be an e-mail address." ;
    } else if ( email.validity.tooShort ) {
        // If the data is too short, display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.` ;
    } ;

    // Set the styling appropriately.
    emailError.className = "error active" ;
} ;

// Example without constraint validation API.
console.log( "Example without constraint validation API." ) ;

const formThree = document.querySelector( "#form-three" ) ;
const emailTwo = document.getElementById( "mail-two" ) ;
const error = emailTwo.nextElementSibling ;

// As per the HTML Specification.
const emailRegExp =
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

// Now we can rebuild our validation constraint because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field.
window.addEventListener( "load", () => {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed e-mail address.
    const isValid = emailTwo.value.length === 0 || emailRegExp.test( emailTwo.value ) ;
    emailTwo.className = isValid ? "valid" : "invalid" ;
} ) ;

// This defines what happens when the user types in the field.
emailTwo.addEventListener( "input", () => {
    const isValid = emailTwo.value.length === 0 || emailRegExp.test( emailTwo.value ) ;
    if ( isValid ) {
        emailTwo.className = "valid" ;
        error.textContent = "" ;
        error.className = "error" ;
    } else {
        emailTwo.className = "invalid" ;
    } ;
} ) ;

// This defines what happens when the user tries to submit the data.
formThree.addEventListener( "submit", ( event ) => {
    event.preventDefault() ;

    const isValid = emailTwo.value.length === 0 || emailRegExp.test( emailTwo.value ) ;
    if ( ! isValid ) {
        emailTwo.className = "invalid" ;
        error.textContent = "I expect an e-mail, darling!" ;
        error.className = "error active" ;
    } else {
        emailTwo.className = "valid" ;
        error.textContent = "" ;
        error.className = "error" ;
    } ;
} ) ;