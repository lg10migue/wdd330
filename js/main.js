// Dynamic Table of Contents

const links = [
    {
        label : "Week 1",
        contents : [
            {
                label : "Story Editor",
                url : "week1/story_editor.html"
            },
            {
                label : "Notes",
                url : "week1/notes.html"
            }
        ]
    }
] ;

createTableOfContents( links ) ;

function createTableOfContents( links ) {
    const main = document.querySelector( "main" ) ;
    links.forEach( link => {

        // Create h2 element for label name.
        let h2 = document.createElement( "h2" ) ;
        h2.innerHTML = link.label ;

        // Attach h2 element to main.
        main.appendChild( h2 ) ;

        // Create list of subcontents.
        const ol = document.createElement( "ol" ) ;

        // Attach elements to table of subcontents.
        link.contents.forEach( element => {

            // Create a element with attributes.
            let a = document.createElement( "a" ) ;
            a.innerHTML = element.label ;
            a.href = element.url ;
            a.target = "_blank" ;

            // Create li element and attach a element.
            let li = document.createElement( "li" ) ;
            li.appendChild( a ) ;

            // Attach li element to ol element.
            ol.appendChild( li ) ;

            // Attach ol element to main.
            main.appendChild( ol ) ;

        } ) ;
    } ) ;
} ;