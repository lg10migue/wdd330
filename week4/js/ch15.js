// Ch15.
console.log( "Chapter 15" ) ;

// Add a class to a paragraph element referenced by the variable para, then append another paragraph on the end.
// para.classList.add( 'important' ) ;
// const newPara = document.createElement( 'p' ) ;
// newPara.textContent = 'Another Paragraph' ;
// para.appendChild( newPara ) ;

// Using the jQuery library, we can achieve the same result using a single line of code.
// $(para).addClass( 'important' ).append( '<p>Another Paragraph</p>' ) ;

// Example of MVC architecture in JS.
console.log( "Example of MVC architecture in JS" ) ;

'use strict'

const newForm = document.forms[2] ;

class Item {
    constructor( name ) {
        this.name = name ;
    } ;
} ;

const controller = {
    watch( form ) {
        form.addEventListener( 'submit', ( event ) => {
        event.preventDefault() ; // Prevent the form from being submitted.
        this.add( form.name.value ) ;
        }, false ) ;
    },
    add( name ) {
        const item = new Item( name ) ;
        view.render( item ) ;
    }
} ;

const view = {
    render( item ) {
        const list = document.getElementById( 'list' ) ;
        const li = document.createElement( 'li' ) ;
        li.innerHTML = item.name ;
        list.appendChild( li ) ;
        // Reset the input field.
        form.name.value = '' ;
    }
} ;

controller.watch( newForm ) ;