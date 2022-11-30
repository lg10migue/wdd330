import { makeRequest } from "./authHelpers.js" ;

// Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest function.

export default class Auth {
    constructor( errorHandler ) {
        this.jwtToken = "" ;
        this.user = {} ;
        this.errors = errorHandler ;
    } ;
    async login( callback ) {
        const password = document.getElementById( "password" ) ;
        const username = document.getElementById( "username" ) ;
        const postData = {
            email: username.value,
            password: password.value
        } ;
        try {
            const data = await makeRequest( "login", "POST", postData ) ;

            // A successful response... We have a token! Store it since we will need to send it with every request to the API.
            this.jwtToken = data.accessToken ;

            // Let's get the user details as well and store them locally in the class.
            this.user = await this.getCurrentUser( username.value ) ;
            console.log( data ) ;

            // Hide the login form.
            hideLogin() ;

            // Clear the password.
            password.value = "" ;

            // Clear any errors from the login process.
            this.errors.clearError() ;

            // Since we have a token let's go grab some data from the API.
            callback() ;
        } catch ( error ) {
            
            // If there were any errors display them.
            this.errors.handleError( error ) ;
            console.log( error ) ;
        } ;
    } ;

    // Uses the email of the currently logged in user to pull up the full user details for that user from the database.
    async getCurrentUser( email ) {
        try {
            const data = await makeRequest( "users?email=" + email, "GET", null, this.jwtToken ) ;
            console.log( data ) ;
            return data[0] ;
        } catch ( error ) {

            // If there were any errors display them.
            this.errors.handleError( error ) ;
            console.log( error ) ;
        } ;
    } ;
    async updateUser() {
        
        // After logging in we pulled down the user from the api... including the id... we can use that to do our update.
        this.user.age = 40 ;
        try {
            const result = await makeRequest( "users/" + this.user.id, "PUT", this.user, this.jwtToken ) ;
            console.log( "Update user:", result ) ;
        } catch ( error ) {
            this.errors.handleError( error, showLogin ) ;
        } ;
    } ;
    set token( value ) {
        // We need this for the getter to work... but we don't want to allow setting the token through this so we are leaving it blank.
    } ;
    get token() {
        return this.jwtToken ;
    } ;
} ;

function showLogin() {
    document.getElementById( "login" ).classList.remove( "hidden" ) ;
} ;

function hideLogin() {
    document.getElementById( "login" ).classList.add( "hidden" ) ;
} ;