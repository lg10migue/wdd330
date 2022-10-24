// Utilities.

// DOM Manipulation helper.
export function qs( selectorName ) {
    return document.querySelector( selectorName ) ;
} ;

// Manage the touch for button, mobile devices first.
export function onTouch( selector, callback, filter = true ) {
    const element = qs( selector ) ;
    element.addEventListener( "touchend", e => {
        e.preventDefault() ;
        callback() ;
    } ) ;
    if ( filter ) {
        element.addEventListener( "click", () => {
            callback() ;
            removeClass() ;
            element.classList.toggle( "click" ) ;
        } ) ;

    } else { 
        element.addEventListener( "click", () => {
            callback() ;
            removeClass() ;
        } ) ;
    } ;
} ;

function qsAll( selectorName ) {
    return document.querySelectorAll( selectorName ) ;
} ;

function removeClass() {
    // Avoid other buttons keeps "clicked".
    const filterButtons = Array.from( qsAll( ".footer-btn" ) ) ;
    filterButtons.forEach( button => button.classList.remove( "click" ) ) ;
}