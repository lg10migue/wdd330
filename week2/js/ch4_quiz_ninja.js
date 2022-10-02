// Set the questions.
const quiz = [
    [ "What is Superman's real name?","Clark Kent" ],
    [ "What is Wonderwoman's real name?","Dianna Prince" ],
    [ "What is Batman's real name?","Bruce Wayne" ]
] ;

function start( quiz ) {
  // Initialize score.
   let score = 0 ;

  // Main game loop.
  for ( const [question,answer] of quiz) {
    const response = ask( question ) ;
    check( response, answer ) ;
  } ;
  // End of main game loop.

  gameOver();

  // Function declarations.
  function ask( question ) {
    return prompt( question ) ;
  } ;

  function check( response, answer ) {
    // Check if answer is correct.
    if ( response === answer ) {
      alert( 'Correct!' ) ;
      // Increase score by 1.
      score++ ;
    } else {
      alert( `Wrong! The correct answer was ${ answer }` ) ;
    } ;
  } ;

  function gameOver() {
    // At the end of the game, report the player's score.
    alert( `Game Over, you scored ${ score } point${ score !== 1 ? 's' : '' }` ) ;
  } ;
} ;

start( quiz ) ;