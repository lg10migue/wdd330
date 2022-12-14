// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1.

// Some data we can work with.

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
] ;

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
] ;

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's.
console.log( "Exercise 1" ) ;
const bornIn = inventors.filter( function( inventor ) {
    return inventor.year >= 1500 && inventor.year <= 1599 ;
} ) ;
console.log( bornIn ) ;

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names.
console.log( "Exercise 2" ) ;
const inventorsNames = inventors.map( function( inventor ) {
    return `${ inventor.first } ${ inventor.last }` ;
} ) ;
console.log( inventorsNames ) ;

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest.
console.log( "Exercise 3" ) ;
const orderedInventors = inventors.sort( ( inventor1, inventor2 ) => inventor1.year > inventor2.year ? 1 : -1 ) ;
console.table( orderedInventors ) ;

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log( "Exercise 4" ) ;
const years = inventors.reduce( ( total, inventor ) => total + ( inventor.passed - inventor.year ), 0 ) ;
console.log( years ) ;

// 5. Sort the inventors by years lived.
console.log( "Exercise 5" ) ;
const yearsLived = inventors.sort( function( inventor1, inventor2 ) {
    const yearsInventor1 = inventor1.passed - inventor1.year ;
    const yearsInventor2 = inventor2.passed - inventor2.year ;
    return yearsInventor1 < yearsInventor2 ? 1 : -1 ;
} ) ;
console.table( yearsLived ) ;

// // 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name.
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// // Go to the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// // const category = document.querySelector( '.mw-category' ) ;
// // const links = Array.from( category.querySelectorAll( 'a' ) ) ;
// console.log( "Exercise 6" ) ;
// // const deBoulevards = links.map( link => link.textContent ).filter( street => street.includes( "de" ) ) ;
// console.log( "Done!" ) ;

// // 7. Sort Exercise.
// // Sort the people alphabetically by last name.
// console.log( "Exercise 7" ) ;
// const sortedPeople = people.sort( ( people1, people2 ) => {
//     const people1Last = people1.split( "," )[0] ;
//     const people2Last = people2.split( "," )[0] ;
//     return people1Last > people2Last ? 1 : -1 ;
// } ) ;
// console.log( sortedPeople ) ;

// // 8. Reduce Exercise.
// // Sum up the instances of each of these.
// console.log( "Exercise 8" ) ;
// const data = [
//     'car',
//     'car',
//     'truck',
//     'truck',
//     'bike',
//     'walk',
//     'car',
//     'van',
//     'bike',
//     'walk',
//     'car',
//     'van',
//     'car',
//     'truck'
// ] ;

// const sumOf = data.reduce( ( vehicules, vehicule ) => {
//     ! vehicules[vehicule] && ( vehicules[vehicule] = 0 ) ;
//     vehicules[vehicule]++ ;
//     return vehicules ; 
// }, {} ) ;
// console.log( sumOf ) ;