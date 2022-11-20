// Using the Fetch API.
console.log( "Using the Fetch API" ) ;

// Basic fetch request.
console.log( "Example of Basic fetch request" ) ;

// fetch( "http://example.com/movies.json" )
//   .then( ( response ) => response.json() )
//   .then( ( data ) => console.log( data ) ) ;

// Supplying request options.
console.log( "Example of Supplying request options" ) ;

// Example POST method implementation:
async function postData( url = '', data = {} ) {
    // Default options are marked with *.
    const response = await fetch( url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached.
        credentials: 'same-origin', // include, *same-origin, omit.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error.
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url.
        body: JSON.stringify( data ) // body data type must match "Content-Type" header.
    } ) ;
    return response.json() ; // parses JSON response into native JavaScript objects
} ;
  
// postData( "https://example.com/answer", { answer: 42 } )
//     .then( ( data ) => {
//         console.log( data ) ; // JSON data parsed by `data.json()` call.
// } ) ;

// Uploading JSON data.
console.log( "Example of Uploading JSON data" ) ;

// const data = { username: 'example' } ;

// fetch( 'https://example.com/profile', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify( data ),
// } )
//     .then( ( response ) => response.json() )
//     .then( ( data ) => { console.log( 'Success:', data ) ; } )
//     .catch( ( error ) => { console.error( 'Error:', error ) ; } ) ;

// Checking that the fetch was successful.
console.log( "Example of Checking that the fetch was successful" ) ;

// fetch( 'flowers.jpg' )
//     .then( ( response ) => {
//         if ( ! response.ok ) {
//             throw new Error( 'Network response was not OK' ) ;
//         } ;
//         return response.blob() ;
//     } )
//     .then( ( myBlob ) => {
//         myImage.src = URL.createObjectURL( myBlob ) ;
//     } )
//     .catch( ( error ) => {
//         console.error( 'There has been a problem with your fetch operation:', error ) ;
//     } ) ;