// Dynamic Table of Contents

const links = [
    {
        label: "Week 1",
        url: ""
    }
] ;

createTableOfContents( links ) ;

function createTableOfContents( links ) {
    const ol = document.querySelector( "ol" ) ;
    links.forEach( link => {

        // Create a element with attributes.
        let a = document.createElement( "a" ) ;
        a.innerHTML = link.label ;
        a.href = link.url ;
        a.target = "_blank" ;

        // Create li element and attach to a element.
        let li = document.createElement( "li" ) ;
        li.appendChild( a ) ;

        // Attach li element to ol element.
        ol.appendChild( li ) ;
    } ) ;
} ;