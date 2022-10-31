// Local Storage.

// Read from Local Storage.
export function readFromLS( key ) {
    return JSON.parse( localStorage.getItem( key ) ) ;
} ;

// Write to Local Storage.
export function writeToLS( key, data ) {
    localStorage.setItem( key, JSON.stringify( data ) ) ;
} ;