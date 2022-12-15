import { like, hide } from "./utilities.js" ;
import Pokemon from "./Pokemon.js" ;
import PokemonView from "./Pokemon_View.js" ;

export default class PokemonController {
    constructor( pokeElement, favElement ) {

        // Parent HTML Elements.
        this.pokedexElement = document.querySelector( pokeElement ) ;
        this.favoritesElement = document.querySelector( favElement ) ;

        // Classes.
        this._pokemon = new Pokemon( "favorites" ) ;
        this._pokemonView = new PokemonView() ;

    } ;
    init() {
        this.pokedexElement.style.display = "grid" ;
        const favButton = this._pokemonView.renderPokedex( this.pokedexElement ) ;
        this.addSearchListener() ;
        this.addFavoritesListener( favButton ) ;
    } ;
    async getPokemonDetails( pokemonName ) {
        try {
            const pokemon = await this._pokemon.getPokemon( pokemonName ) ;
            this.pokedexElement.innerHTML = "" ;
            let flag = false ;
            if ( this._pokemon._favorites.includes( String( pokemon.id ) ) ) flag = true ;
            const [ favButton, favoriteButton ] = this._pokemonView.renderPokemon( pokemon, this.pokedexElement, flag ) ;
            this.addSearchListener() ;
            this.addFavListener( favoriteButton ) ;
            this.addFavoritesListener( favButton ) ;
        } catch( e ) {
            console.log( e ) ;
            const favButton = this._pokemonView.renderNotFound( this.pokedexElement ) ;
            this.addSearchListener() ;
            this.addFavoritesListener( favButton ) ;

        } ;
    } ;
    async getFavoritePokemons() {
        try {
            this.pokedexElement.style.display = "none" ;
            const pokemons = await this._pokemon.getPokemons() ;
            const [ returnButton, buttons ] = this._pokemonView.renderFavorites( pokemons, this.favoritesElement ) ;
            returnButton.onclick = () => {
                this.favoritesElement.innerHTML = "" ;
                this.init() ;
            } ;
            buttons.forEach( button => this.addFavListener( button ) ) ;
        } catch( e ) {
            console.log( e ) ;
        } ;
    } ;
    addSearchListener() {
        const form = document.forms[0] ;
        form.onsubmit = ( event )  => {
            event.preventDefault() ;
            const pokemonIndex = document.getElementById( "pokemon" ) ;
            const pokemon = pokemonIndex.value ;
            this.getPokemonDetails( pokemon ) ;

            // Clean form input.
            document.getElementById( "pokemon" ).value = "" ;
        } ;
    } ;
    addFavoritesListener( button ) {
        button.onclick = () => this.getFavoritePokemons() ;
    } ;
    addFavListener( button ) {
        button.onclick = () => {
            const id = button.dataset.id
            like( button ) ;
            if ( this._pokemon._favorites.includes( id ) ) {
                this._pokemon.removeFavorite( id ) ;
            } else {
                this._pokemon.addFavorite( id ) ;
            } ;
        } ;
    } ;
} ;