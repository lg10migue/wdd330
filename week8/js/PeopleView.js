export default class PeopleView {
    renderPeopleList( people, peopleListElement, controller ) {
        peopleListElement.innerHTML = "" ;
        people.forEach( function( person ) {
            const liElement = document.createElement( "li" ) ;
            liElement.innerHTML = `<a href=>${person.name}</a>` ;
            liElement.addEventListener( "click", event => {
                event.preventDefault() ;
                controller.getPeopleDetails( person.url ) ; 
            } ) ;
            peopleListElement.appendChild( liElement ) ;
        } ) ;
    } ;
    // Stretch Goal 1.
    renderPersonDetails( person, detailsDivElement ) {
        const hidden = detailsDivElement.classList.contains( "hidden" ) ;
        if ( hidden ) detailsDivElement.classList.toggle( "hidden" ) ;
        detailsDivElement.innerHTML = "" ;
        const sectionElement = document.createElement( "section" ) ;
        sectionElement.innerHTML = `<button id="delete">-</button>
        <h2>${person.name}</h2>
        <p>Birth Year: ${person.birth_year}</p>
        <p>Gender: ${ title( person.gender ) }</p>
        <p>Eye Color: ${ title( person.eye_color ) }</p>
        <p>Hair Color: ${ title( person.hair_color ) }</p>`
        const button = sectionElement.querySelector( "#delete" ) ;
        button.addEventListener( "click", () => detailsDivElement.classList.toggle( "hidden" ) ) ;
        detailsDivElement.appendChild( sectionElement ) ;

        function title( str ) {
            const capitalized = str.charAt( 0 ).toUpperCase() + str.slice( 1 ) ;
            return capitalized ;
        } ;
    } ;
    // Stretch Goal 2.
    renderPagination( url, totalResults, controller ) {
        let pages = Math.floor( totalResults / 10 ) + 1 ;
        const paginationElement = document.querySelector( "#pagination" ) ;
        for ( let i = 1 ; i <= pages ; i++ ) {
            let pageButton = document.createElement( "a" ) ;
            pageButton.innerHTML = i ;
            pageButton.setAttribute( "href", `${url}?page=${i}` ) ;
            pageButton.onclick = event => {
                event.preventDefault() ;
                controller.showPeople( `${url}?page=${i}` ) ;
            }  ;
            paginationElement.appendChild( pageButton ) ;
        } ;
    } ;
} ;