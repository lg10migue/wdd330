const board = document.querySelector( "table" ) ;
const resetButton = document.getElementsByTagName( "button" )[0] ;
const divDisplay = document.querySelector( "body header h1" ) ;
const player1 = { label : "Player 1", token : "O" }
const player2 = { label : "Player 2", token : "X" } ;
let player = player1 ;

// Requirement 2.
function makeMove( e ) {
    if ( e.target.innerHTML === "" ) {
        e.target.innerHTML = player.token
        if ( ! checkWinner() ) {
            if ( player === player1 ) player = player2 ;
            else player = player1 ;
            divDisplay.innerHTML = `${ player.label } turns!` ;
        } ;
    } ;
} ;

board.addEventListener( "click", makeMove ) ;

// Requirement 3.
resetButton.addEventListener( "click", function() {
    for ( let i = 0 ; i < board.rows.length ; i++ ) {
        let row = board.rows[i] ;
        for ( let j = 0 ; j < row.cells.length ; j++ ) {
            row.cells[j].innerHTML = "" ;
        } ;
    } ;
    board.addEventListener( "click", makeMove ) ;
    divDisplay.style.backgroundColor = "rgb( 255, 240, 37 )" ;
    divDisplay.innerHTML = `${ player.label } turns!` ;
} ) ;

// Stretch Goal 2 & 3.
function checkWinner() {
    let boardRows = board.rows ;
    if ( boardRows[0].children[0].innerHTML === player.token && boardRows[0].children[1].innerHTML === player.token && boardRows[0].children[2].innerHTML === player.token ||
        boardRows[1].children[0].innerHTML === player.token && boardRows[1].children[1].innerHTML === player.token && boardRows[1].children[2].innerHTML === player.token ||
        boardRows[2].children[0].innerHTML === player.token && boardRows[2].children[1].innerHTML === player.token && boardRows[2].children[2].innerHTML === player.token ||
        boardRows[0].children[0].innerHTML === player.token && boardRows[1].children[0].innerHTML === player.token && boardRows[2].children[0].innerHTML === player.token ||
        boardRows[0].children[1].innerHTML === player.token && boardRows[1].children[1].innerHTML === player.token && boardRows[2].children[1].innerHTML === player.token ||
        boardRows[0].children[2].innerHTML === player.token && boardRows[1].children[2].innerHTML === player.token && boardRows[2].children[2].innerHTML === player.token ||
        boardRows[0].children[0].innerHTML === player.token && boardRows[1].children[1].innerHTML === player.token && boardRows[2].children[2].innerHTML === player.token ||
        boardRows[0].children[2].innerHTML === player.token && boardRows[1].children[1].innerHTML === player.token && boardRows[2].children[0].innerHTML === player.token ) {
            divDisplay.innerHTML = `${ player.label.toUpperCase() } WINS!` ;
            divDisplay.style.backgroundColor = "lawngreen" ;
            board.removeEventListener( "click", makeMove ) ;
            return true ;
    } ;
    let flag = false ;
    for ( let i = 0 ; i < board.rows.length ; i++ ) {
        let row = board.rows[i] ;
        for ( let j = 0 ; j < row.cells.length ; j++ ) {
            if ( row.cells[j].innerHTML === "" )  flag = true ;
        } ;
    } ;
    if ( ! flag ) {
        divDisplay.innerHTML = `TIED GAME!` ;
        divDisplay.style.backgroundColor = "orange" ;
        return true
    } ;
} ;