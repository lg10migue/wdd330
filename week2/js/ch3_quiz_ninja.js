// Set the questions.
const quiz = new Map( [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonderwoman's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
  ] ) ;

 // Initialize score.
let score = 0 ;

for ( const [question,answer] of quiz.entries() ) {

  // Get answer from user.
  const response = prompt( question ) ;
  // Check if answer is correct
  if ( response === answer ) {
    alert( 'Correct!' ) ;
    // Increase score by 1.
    score++ ;
  } else {
    alert( `Wrong! The correct answer was ${answer}` ) ;
  }
} ;

// At the end of the game, report the player's score.
alert( `Game Over, you scored ${score} point${score > 1 ? 's' : ''}` ) ;