// Directory of colors by type of Pokemon.
const typeColors = {
    grass: "#2DCD45",
    poison: "#883688",
    fire: "#F08030",
    flying: "#A890F0",
    water: "#4BA2E1",
    bug: "#A8B820",
    normal: "#A8A878",
    electric: "#F8D030",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#94352D",
    psychic: "#FF6996",
    rock: "#B8A038",
    steel: "#B8B8D0",
    ice: "#98D8D8",
    ghost: "#614C83",
    dragon: "#700AEE",
    default: "#2A1A1F"
} ;

// Select color from directory.
function setCardColor( types, imgElement ) {
    const colorOne = typeColors[types[0].type.name] ;
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default ;
    imgElement.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)` ;
    imgElement.style.backgroundSize = "5px 5px" ;

} ;

// Add the type to Pokemon Cards.
function renderPokemonTypes( types, divElement ) {
    divElement.innerHTML = "" ;
    types.forEach( type => {
        const typeTextElement = document.createElement( "div" ) ;
        typeTextElement.style.color = typeColors[type.type.name] ;

        // Type name.
        typeTextElement.textContent = type.type.name.toUpperCase() ;
        divElement.appendChild( typeTextElement ) ;
    } ) ;
} ;

// Get types information.
function getTypes( typesArray ) {
    let types = [] ;
    let colorOne ;
    let colorTwo ;
    typesArray.forEach( type => types.push( type.type.name ) ) ;
    types = types.join( " / " ) ;
    if ( typesArray.length >= 2 ) {
        colorOne = typeColors[typesArray[0].type.name] ;
        colorTwo = typeColors[typesArray[1].type.name] ;
    } else {
        colorOne = typeColors[typesArray[0].type.name] ;
        colorTwo = "transparent"
    } ;
    return [ types, colorOne, colorTwo ] ;
} ;

// Add stats of Pokemon.
function renderPokemonStats( stats, divElement ) {
    divElement.innerHTML = "" ;
    stats.forEach( stat => {
        const statElement = document.createElement( "div" ) ;
        const statElementName = document.createElement( "div" ) ;
        const statElementAmount = document.createElement( "div" ) ;

        // Stat name.
        statElementName.textContent = stat.stat.name.toUpperCase() ;
        
        // Stat value.
        statElementAmount.textContent = stat.base_stat ;
        statElement.appendChild( statElementName ) ;
        statElement.appendChild( statElementAmount ) ;
        divElement.appendChild( statElement ) ;
    } ) ;
} ;

function renderHTMLPokedex( pokemonName = "", img = "images/poke-shadow.png", alt = "pokeshadow", defaultView = true, active = false,
id = "", colorOne = "", colorTwo = "", type = "", height = "", weight = "", exp = "" ) {
    let favElement = "" ;
    if ( ! defaultView ) {
        favElement = `<div class="heart" data-id=${id}></div>` ;
        if ( active ) favElement = `<div class="heart is-active" data-id=${id}></div>` ;
    } ;
    return `
    <div class="left">
        <div class="left-main">
            <div class="left-top-wrapper">
                <div class="left-top">
                    <div class="blueBtn btn huge active" id="blueBtn"></div>
                    <div class="redBtn btn medium"></div>
                    <div class="jauneBtn btn medium"></div>
                    <div class="vertBtn btn medium"></div>
                </div>
            </div>
            <div class="left-screen">
                <div class="screen-border-grey">
                    <div class="screen-top-btn">
                        <div class="redBtn btn small"></div>
                        <div class="redBtn btn small"></div>
                    </div>
                    <div class="screen-black">
                        <img src="${img}" alt="${alt}" id="image">
                    </div>
                    <div class="screen-bottom-btn">
                        <div class="redBtn btn medium"></div>
                        ${favElement}
                        <div class="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left-commands">
                <div class="noirBtn btn large"></div>
                <div class="commands-central">
                    <div class="longBtn redBtn"></div>
                    <div class="longBtn blueBtn"></div>
                    <div class="greenScreen medlargeScreen">
                        <h4 class="title title-4" id="name">${pokemonName}</h4>
                    </div>
                </div>
                <div class="croix"></div>
            </div>
        </div>
        <div class="central-cylinder">
            <div class="cynlinder-central-block"></div>
        </div>
    </div>
    <div class="right-wrapper">
        <div class="right">
            <div class="blackScreen largeScreen">
                <p id="index">${id}</p>
                <div id="typeBubbleDiv">
                    <div id="bubble1" class="typeBubble" style="background-color: ${colorOne} ;"></div>
                    <div id="bubble2" class="typeBubble" style="background-color: ${colorTwo} ;"></div>
                </div>
                <p id="type">${type}</p>
                <p id="height">${height}</p>
                <p id="weight">${weight}</p>
                <p id="region">${exp}</p>
            </div>
            <div class="gridBtn blueGrid">
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
                <div class="gridCell"></div>
            </div>
            <div class="longBtnRight">
                <div class="longBtn noirBtn"></div>
                <div class="longBtn noirBtn"></div>
            </div>
            <form class="gridBtn whiteGrid">
                <input type="text" id="pokemon" placeholder="Enter a Pokemon" required pattern="[a-zA-Z]*$">
                <button class="jauneBtn btn large active" id="search"></button>
            </form>
            <div class="noirScreen mediumScreen" id="favorites-btn">Favorites</div>
        </div>
    </div>
    `
} ;

export default class PokemonView {
    renderPokedex( pokedexElement ) {
        // Create Pokedex.
        const pokedex = renderHTMLPokedex() ;
        pokedexElement.innerHTML = pokedex ;
        const favoritesButton = pokedexElement.querySelector( "#favorites-btn" ) ;
        return favoritesButton ;
    } ;
    renderPokemon( pokemon, pokedexElement, active = false ) {
        // Get types.
        const [ types, colorOne, colorTwo ] = getTypes( pokemon.types ) ;

        // Update Pokedex.
        const pokedex = renderHTMLPokedex( pokemon.name, pokemon.sprites.front_default, pokemon.name, false,
            active, pokemon.id, colorOne, colorTwo, types, `${pokemon.height * 10} cm`,
            `${pokemon.weight / 10} kg`, `${pokemon.base_experience} XP` ) ;
        let favElement = `<div class="heart" id="${pokemon.name}"></div>` ;
        if ( active ) favElement = `<div class="heart is-active" id="${pokemon.name}"></div>` ;
        pokedexElement.innerHTML = pokedex ;

        // Buttons.
        const favoritesButton = pokedexElement.querySelector( "#favorites-btn" ) ;
        const favButton = pokedexElement.querySelector( ".heart" )
        return [ favoritesButton, favButton ] ;
    } ;
    renderPokeCard( pokemon, pokedexElement ) {

        // Create pokecard.
        const pokeCard = document.createElement( "section" ) ;
        pokeCard.setAttribute( "class", "poke-card" ) ;
        pokeCard.innerHTML =  `
        <div>${pokemon.name.toUpperCase()}</div>
        <div class="img-container">
            <img class="poke-img" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="heart is-active" data-id=${pokemon.id}></div>
        <div id="poke-id">Nº ${pokemon.id}</div>
        <div class="poke-types"></div>
        <div class="poke-stats"></div>` ;
        const imgElement = pokeCard.querySelector( ".poke-img" ) ;
        const typesElement = pokeCard.querySelector( ".poke-types" ) ;
        const statsElement = pokeCard.querySelector( ".poke-stats" ) ;

        // Color for types.
        setCardColor( pokemon.types, imgElement ) ;

        // Pokemon info.
        renderPokemonTypes( pokemon.types, typesElement ) ;
        renderPokemonStats( pokemon.stats, statsElement ) ;

        pokedexElement.appendChild( pokeCard ) ;

        const favButton = pokeCard.querySelector( ".heart" ) ;
        return favButton ;
    } ;
    renderFavorites( pokemons, pokedexElement ) {
        // Create return button.
        const returnButton = document.createElement( "button" ) ;
        returnButton.setAttribute( "id", "return-button" ) ;
        returnButton.textContent = "Return" ;

        // Create PokeCards container.
        const pokeContainer = document.createElement( "div" ) ;
        pokeContainer.setAttribute( "class", "favorites" ) ;
        pokedexElement.innerHTML = "" ;
        let buttons = [] ;
        pokemons.forEach( pokemon => {
            let button = this.renderPokeCard( pokemon, pokeContainer, true )
            buttons.push( button ) ;
        } ) ;

        pokedexElement.appendChild( returnButton ) ;
        pokedexElement.appendChild( pokeContainer ) ;
        return [ returnButton, buttons ] ;
    } ;
    renderNotFound( pokedexElement ) {
        const pokedex = renderHTMLPokedex( "Pokemon not found" ) ;
        pokedexElement.innerHTML = pokedex ;
        pokedexElement.querySelector( ".screen-black" ).style.backgroundColor = "#FFF" ;
        const favoritesButton = pokedexElement.querySelector( "#favorites-btn" ) ;
        return favoritesButton ;
    } ;
} ;