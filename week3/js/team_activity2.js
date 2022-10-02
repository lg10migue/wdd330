// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
] ;

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
] ;

// Some and Every Checks.
// Array.prototype.some()
// Is at least one person 19 or older?
console.log( "Is at leat one person 19 or older?" ) ;
const is19 = people.some( person => ( new Date().getFullYear() ) - person.year >= 19 ) ;
console.log( is19 ) ;

// Array.prototype.every()
// Is everyone 19 or older?
console.log( "Is everyone 19 or older?" ) ;
const adults = people.every( person => ( new Date().getFullYear() ) - person.year >= 19 ) ;
console.log( adults ) ; 

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for.
// Find the comment with the ID of 823423.
console.log( "Comment with ID 823423" ) ;
const comment = comments.find( comment => comment.id === 823423 ) ;
console.log( comment ) ;

// Array.prototype.findIndex()
// Find the comment with this ID.
console.log( "Find the comment with ID 823423" ) ;
const index = comments.findIndex( comment => comment.id === 823423 ) ;
console.log( index ) ;

// Delete the comment with the ID of 823423.
console.log( "Delete the comment with ID 823423" ) ;
// console.log( { comments } ) ;
// comments.splice( index, 1 ) ;
// console.log( { comments } ) ;

// Creating new array without the "deleted" comment.
const newComments = [ ...comments.slice( 0, index ), ...comments.slice( index + 1 ) ] ;
console.log( newComments ) ;