function title( str ) {
    const capitalized = str.charAt( 0 ).toUpperCase() + str.slice( 1 ) ;
    return capitalized ;
} ;

// Quake View handler.
export default class QuakesView {
    renderQuakeList( quakeList, listElement ) {

        // Build a list of the quakes including the title, time and id of the quake as a data- property.
        listElement.innerHTML = quakeList.features.map( quake => {
            return `<li data-id=${quake.id} class="quakes">${quake.properties.title}<br>${new Date(quake.properties.time)}</li>` ;
        } ).join( "" ) ;
    } ;
    renderQuake( quake, element ) {
        const quakeProperties = Object.entries( quake.properties ) ;

        // For the provided quake make a list of each of the properties associated with it.
        element.innerHTML = quakeProperties.map( item => {
            if ( item[0] === "time" || item[0] === "updated" ) {
                return `<li><b>${title( item[0] )}</b>: ${new Date( item[1] )}</li>` ;
            } else return `<li><b>${title( item[0] )}</b>: ${item[1]}</li>` ;
        } ).join( "" ) ;

        // Stretch Goal 2.
        const backButton = document.createElement( "button" ) ;
        backButton.innerHTML = "Return" ;
        element.insertBefore( backButton, element.childNodes[0] ) ;
        return backButton ;
    } ;
} ;