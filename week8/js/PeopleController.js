import PeopleModel from "./PeopleModel.js";
import PeopleView from "./PeopleView.js";

const URL = "https://swapi.dev/api/people/"

export default class PeopleController {
    constructor( listElement, detailsElement ) {
        this.listElement = document.getElementById( listElement ) ;
        this.detailsElement = document.getElementById( detailsElement ) ;
        this.model = new PeopleModel() ;
        this.view = new PeopleView() ;
    } ;
    showPeople( url = URL ) {
        this.model.getData( url ).then( data => {
            const people = data.results ;
            this.view.renderPeopleList( people, this.listElement, this )
            if ( this.listElement.nextElementSibling.childNodes.length === 0 ) this.view.renderPagination( url, data.count, this ) ;
        } ) ;
    } ;
    getPeopleDetails( url ) {
        this.model.getData( url ).then( data => {
            const person = data ;
            this.view.renderPersonDetails( person, this.detailsElement ) ;
        } )
    } ;
} ;