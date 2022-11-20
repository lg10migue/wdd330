import { getJSON } from "./utilities.js" ;

// Quake Model.
export default class Quake {
    constructor() {
        this.baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson" ;

        // Store the last batch of retrieved quakes in the model.
        this._quakes = [] ;
    } ;
    async getEarthQuakes( position, radius = 200, starttime = "2020-01-01", endtime = "2020-02-02" ) {

        // Use the getJSON function and the position provided to build out the correct URL.
        const URL = this.baseUrl + `&starttime=${starttime}&endtime=${endtime}` + `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}` ;
        this._quakes = await getJSON( URL ) ;
        return this._quakes ;
    } ;
    getQuakeById( id ) {

        // Filter this._quakes for the record identified by id and return it.
        return this._quakes.features.filter( item => item.id === id )[0] ;
    } ;
} ;