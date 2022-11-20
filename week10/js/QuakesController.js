import { getLocation } from "./utilities.js" ;
import Quake from "./Quake.js" ;
import QuakesView from "./QuakesView.js" ;

// Quake controller.
export default class QuakesController {
    constructor( parent, position = null ) {
        this.parent = parent ;

        // Set this in the init().
        this.parentElement = null ;

        // Option of using a location other than the current location.
        this.position = position || { lat: 0, lon: 0 } ;
        this.quakes = new Quake() ;
        this.quakesView = new QuakesView() ;
    } ;
    async init() {
        this.parentElement = document.querySelector( this.parent ) ;
        await this.initPos() ;
        this.getQuakes() ;
    } ;
    async initPos() {

        // If a position has not been set.
        if ( this.position.lat === 0 ) {
            try {

                // Try to get the position using getLocation().
                const posFull = await getLocation() ;

                // If we get the location back then set the latitude and longitude into this.position.
                this.position.lat = posFull.coords.latitude ;
                this.position.lon = posFull.coords.longitude ;
            } catch ( error ) {
                console.log( error ) ;
            } ;
        } ;
    } ;
    async getQuakes( radius = 200 ) {

        // Set a loading message in case it takes long to get the quakes.
        this.parentElement.innerHTML = "<li>Loading...</li>" ;

        // Get the list of quakes in the specified radius of the location.
        const quakeList = await this.quakes.getEarthQuakes( this.position, radius ) ;

        // Render the list to html.
        this.quakesView.renderQuakeList( quakeList, this.parentElement ) ;

        // Add a listener to the new list of quakes to allow drill down in to the details.
        this.parentElement.onclick = event => this.getQuakeDetails( event.target.dataset.id ) ;
    } ;
    async getQuakeDetails( quakeId ) {

        // Remove event listener for details.
        this.parentElement.onclick = "" ;

        // Get the details for the quakeId provided.
        const quake = this.quakes.getQuakeById( quakeId ) ;
        this.quakesView.renderQuake( quake, this.parentElement ).onclick = () => this.getQuakes() ;
    } ;
} ;