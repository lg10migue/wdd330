export function getJSON( url ) {
    return fetch( url )
        .then( function( response ) {
            if ( ! response.ok ) {
                throw Error( response.statusText ) ;
            } else {
                return response.json() ;
            } ;
        } )
        .catch( function( error ) {
            console.log( error ) ;
        } ) ;
} ;

// Keep or remove like.
export function like( button ) {
    // Toggle class.
    button.classList.toggle( "is-active" ) ;
} ;

// Hide a element.
export function hide( element ) {
    element.classList.toggle( "hidden" ) ;
} ;