import PeopleController from "./PeopleController.js" ;

// On load.
const starWarsController = new PeopleController( "people", "details" ) ;
window.addEventListener( "load", () => starWarsController.showPeople() ) ;