// Object Methods: this.
console.log( "Object Methods: this" ) ;

// Objects.
console.log( "Examples of Objects" ) ;

let user = {
    name : "John",
    age : 30
} ;

console.log( user ) ;

// Method Examples.
console.log( "Method Examples" ) ;

// Function Expression.
user.sayHi = function() {
    console.log( "Hello with Function Expression!" ) ;
} ;

user.sayHi() ;

// Pre-declared Functions.
function sayHi() {
    console.log( "Hello with a Pre-declared Function!" ) ;
} ;

// Add the function as a method.
user.sayHi = sayHi ;

user.sayHi() ;

// Method Shorthand.
user = {
    sayHi() {
        console.log( "Hello with Method Shorthand!" ) ;
    }

    // Same as:
    // sayHi : function() {
    //     console.log( "Hello with Method from Object Literal!" ) ;
    // }
} ;

user.sayHi() ;

// this in methods.
console.log( "Examples of this in methods" ) ;

user = {
    name : "John",
    age : 30,
  
    sayHi() {
      // "this" is the "current object".
      console.log( this.name ) ;
    }
  
} ;

user.sayHi() ;

// this is not bound.
console.log( "Examples that this is not bound" ) ;

let user1 = { name : "John" } ;
let admin = { name : "Admin" } ;

function sayHi2() {
    console.log( this.name ) ;
} ;

// Use the same function in two objects.
user1.f = sayHi2 ;
admin.f = sayHi2 ;

// These calls have different this.
// "this" inside the function is the object "before the dot".
user1.f() ; // John  ( this == user1 )
admin.f() ; // Admin  ( this == admin )
admin["f"]() ; // Admin ( dot or square brackets access the method – doesn't matter ).

// Calling without an object.
console.log( "Examples of Calling without an object" ) ;

function sayHi3() {
    console.log( this ) ;
} ;
  
sayHi3() ;