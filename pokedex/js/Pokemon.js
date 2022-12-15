import { getJSON } from "./utilities.js" ;
import { readFromLS, writeToLS } from "./ls.js" ;

export default class Pokemon {
    constructor( key ) {
        this.baseURL = "https://pokeapi.co/api/v2/pokemon/" ;
        this._key = key ;

        // Current Pokemon.
        this._pokemon = [] ;

        // Favorites.
        this._favorites = readFromLS( this._key ) || [] ;
    } ;
    async getPokemon( pokemon ) {
        if ( typeof pokemon === "string" ) pokemon = pokemon.toLowerCase() ;
        const URL = this.baseURL + pokemon ;
        this._pokemon = await getJSON( URL ) ;
        return this._pokemon ;
    } ;
    async getPokemons() {
        let pokemons = [] ;
        for ( let id of this._favorites ) {
            let pokemon = await this.getPokemon( id ) ;
            pokemons.push( pokemon ) ;
        } ;
        return pokemons ;
    } ;
    addFavorite( pokemonID ) {
        if ( ! this._favorites.includes( pokemonID ) ) this._favorites.push( pokemonID ) ;
        writeToLS( this._key, this._favorites ) ;
    } ;
    removeFavorite( pokemonID ) {
        const index = this._favorites.indexOf( pokemonID ) ;
        if ( index > -1 ) {
            this._favorites.splice( index, 1 ) ;
        writeToLS( this._key, this._favorites ) ;
        } ;
    } ;
} ;