const board = document.querySelector( "table" ) ;
const resetButton = document.getElementsByTagName( "button" )[0] ;
const divDisplay = document.querySelector( "body header h1" ) ;
const player1 = { label : "Player 1", token : "O" }
const player2 = { label : "Player 2", token : "X" } ;
let player = player1 ;

// Requirement 2.
board.addEventListener( "click", function( e ) {
    if ( e.target.innerHTML === "" ) {
        e.target.innerHTML = player.token
        if ( player === player1 ) player = player2 ;
        else player = player1 ;
        divDisplay.innerHTML = `${ player.label } turns!`
    } ;
} ) ;

// Requirement 3.
resetButton.addEventListener( "click", function() {
    for ( let i = 0 ; i < board.rows.length ; i++ ) {
        let row = board.rows[i] ;
        for ( let j = 0 ; j < row.cells.length ; j++ ) {
            row.cells[j].innerHTML = "" ;
        } ;
    } ;
} ) ;

// Stretch Goal 2 & 3.

