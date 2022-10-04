// Dynamic Table of Contents.

const links = [
    {
        label : "Week 1",
        contents : [
            {
                label : "Notes",
                url : "week1/notes.html"
            },
            {
                label : "Story Editor",
                url : "week1/story_editor.html"
            }
        ]
    },
    {
        label : "Week 2",
        contents : [
            {
                label : "Notes",
                url : "week2/notes.html"
            },
            {
                label : "Ch2: Quiz Ninja",
                url : "week2/ch2_quiz_ninja.html"
            },
            {
                label : "Ch3: Quiz Ninja",
                url : "week2/ch3_quiz_ninja.html"
            },
            {
                label : "Ch4: Quiz Ninja",
                url : "week2/ch4_quiz_ninja.html"
            },
            {
                label : "Exercises",
                url : "week2/exercises.html"
            },
            {
                label : "Team Activity",
                url : "week2/team_activity.html"
            },
        ]
    },
    {
        label : "Week 3",
        contents : [
            {
                label : "Notes",
                url : "week3/notes.html"
            },
            {
                label : "Ch5: Quiz Ninja",
                url : "week3/ch5_quiz_ninja.html"
            },
            {
                label : "Ch6: Quiz Ninja",
                url : "week3/ch6_quiz_ninja.html"
            },
            {
                label : "Ch7: Quiz Ninja",
                url : "week3/ch7_quiz_ninja.html"
            },
            {
                label : "Exercises",
                url : "week3/exercises.html"
            },
            {
                label : "Team Activity",
                url : "week3/team_activity.html"
            },
            {
                label : "Team Activity Part 2",
                url : "week3/team_activity2.html"
            }
        ]
    },
] ;

createTableOfContents( links ) ;

function createTableOfContents( links ) {
    const main = document.querySelector( "main" ) ;
    links.forEach( link => {

        // Create h2 element for label name.
        let h2 = document.createElement( "h2" ) ;
        h2.classList.toggle( "collapsible" ) ;
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

// Create collapsible buttons.
let collapsibleButton = document.getElementsByClassName( "collapsible" ) ;

for ( let i = 0 ; i < collapsibleButton.length ; i++ ) {
  collapsibleButton[i].addEventListener( "click", function() {
    this.classList.toggle( "active" ) ;
    let content = this.nextElementSibling ;
    if ( content.style.display === "block" ){
      content.style.display = "none" ;
    } else {
      content.style.display = "block" ;
    }
  } ) ;
} ;