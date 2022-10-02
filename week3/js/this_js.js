// This in JavaScript.
console.log( "This in JavaScript" ) ;

// This in a Global Context.
console.log( "This in a Global Context" ) ;

console.log( this ) ;

// This in Object Construction.
console.log( "This in Object Construction" ) ;

function Person(age) {
    this.age = age
} ;
  
const greg = new Person( 22 ) ;
const thomas = new Person( 24 ) ;

console.log( greg ) ; // this.age = 22
console.log( thomas ) ; // this.age = 24

// This in an Object Method.
console.log( "This in an Object Method" ) ;

let o = {
    // A method.
    sayThis () {
      console.log( this ) ;
    } 
} ;
  
o.sayThis() ;

function Human ( name ) {
    return {
        name,
        getName() {
            return this.name
        }
    } ;
} ;

const zell = new Human( "Zell" ) ;
const vincy = new Human( "Vincy" ) ;

console.log( zell.getName() ) ;

// This in a Simple Function.
console.log( "This in a Simple Function" ) ;

function simpleFunction() {
    console.log( this )
} ;
  
const ob = {
    sayThis() {
        simpleFunction()
    } 
} ;
  
simpleFunction() ;
ob.sayThis() ;

// This in Arrow Functions.
console.log( "This in Arrow Functions" ) ;

const obj = {
    doSomethingLater() {
      setTimeout( () => this.speakLeet(), 1000 ) ;
    },
    speakLeet() {
      console.log( `1337 15 4W350M3` ) ;
    }
} ;

obj.speakLeet() ;
// obj.doSomethingLater() ; // Will run after n seconds passed.