// Ch13.
console.log( "Chapter 13" ) ;

// Fetch API Basic Usage.
console.log( "Examples of Fetch API Basic Usage" ) ;

// fetch( 'https://example.com/data' )
// .then( // Code that handles the response. )
// .catch( // Code that runs if the server returns an error. ) ;

// Response Interface.
console.log( "Examples of Response Interface" ) ;

// const url = "https:example.com/data" ;

// fetch( url )
// .then( ( response ) => {
//     if( response.ok ) {
//         return response ;
//     } ;
//     throw Error( response.statusText ) ;
// } ) 
// .then( response => // Do something with response. )
// .catch( error => console.log( "There was an error!" ) ) ;

// Text Responses.
console.log( "Examples of Text Responses" ) ;

// fetch( url )
// .then( response => response.text() ) ; // Transforms the text stream into a JavaScript string.
// .then( text => console.log( text ) )
// .catch( error => console.log( "There was an error: ", error ) ) ;

// File Responses.
console.log( "Examples of File Responses" ) ;

// fetch( url )
// .then( response => response.blob() ) ; // Transforms the data into a blob object.
// .then( blob => console.log( blob.type ) )
// .catch( error => console.log( "There was an error: ", error ) ) ;

// JSON Responses.
console.log( "Examples of JSON Responses" ) ;

// fetch( url )
// .then( response => response.json() ) ; // Transforms the JSON data into a JavaScript object.
// .then( data => console.log( Object.entries( data ) ) ) // Object.entries() method is used to
// view the key and value pairs in the returned object.
// .catch( error => console.log( 'There was an error: ', error ) ) ;

// Creating Response Objects.
console.log( "Examples of Creating Response Objects" ) ;
const response = new Response( "Hello!", {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
} ) ;

console.log( response ) ;

// Request Interface.
console.log( "Examples of Request Interface" ) ;

const request = new Request( "https://example.com/data", {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
} ) ;

// Using Request object.
// fetch( request )
// .then( // Do something with the response. )
// .catch( // Handle any errors ) ;

// Without Request Object.
// fetch( 'https://example.com/data', {
//     method: 'GET',
//     mode: 'cors',
//     redirect: 'follow',
//     cache: 'no-cache'
// } )
// .then( // Do something with the response. )
// .catch( // Handle any errors. ) ;

// Headers Interface.
console.log( "Examples of Headers Interface" ) ;

const headers = new Headers( { 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' } ) ;
console.log( headers ) ;
console.log( headers.has( 'Content-Type' ) ) ;
console.log( headers.get( 'Content-Type' ) ) ;