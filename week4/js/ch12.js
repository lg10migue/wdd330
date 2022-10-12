// Ch12.
console.log( "Chapter 12" ) ;

// Constructor Functions.
console.log( "Examples of Constructor Functions" ) ;

const Dice = function( sides = 6 ) {
    this.sides = sides ;
    this.roll = function() {
        return Math.floor( this.sides * Math.random() + 1 ) ;
    } ;
} ;

const redDice = new Dice() ;
console.log( redDice ) ;

// Class Declarations.
console.log( "Examples of Class Declarations" ) ;

class NewDice {
    constructor( sides = 6 ) {
        this.sides = sides ;
    } ;

    roll() {
        return Math.floor( this.sides * Math.random() + 1 ) ;
    } ;
} ;

const blueDice = new NewDice( 20 ) ;
console.log( blueDice ) ;

// Prototypal Inheritance.
console.log( "Examples of Prototypal Inheritance" ) ;

class Turtle {
    constructor( name ) {
        this.name = name ;
        this.weapon = 'hands' ;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}` ;
    } ;
    attack() {
        return `Feel the power of my ${this.weapon}!` ;
    } ;
} ;

const leo = new Turtle( "Leonardo" ) ;
console.log( leo ) ;

// The Prototype Property.'
console.log( "Examples of The Prototype Property" ) ;

console.log( Turtle.prototype ) ;

// Finding Out the Prototype.
console.log( "Examples of Finding Out the Prototype" ) ;

console.log( leo.constructor.prototype ) ;

console.log( Object.getPrototypeOf( leo ) ) ;
console.log( leo.__proto__ ) ;
console.log( Turtle.prototype.isPrototypeOf( leo ) ) ;

// Overwriting Prototype Properties.
console.log( "Examples of Overwriting Prototype Properties" ) ;
leo.weapon = "Katana Blades" ;
console.log( leo.weapon ) ;
console.log( leo ) ;

// What Should the Prototype Be Used For?
console.log( "Examples of What Should the Prototype Be Used For?" ) ;

Turtle.prototype.food = "Pizza" ;

Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!` ;
} ;

console.log( leo.food ) ;
console.log( leo.eat() ) ;

const mike = new Turtle( "Michelangelo" ) ;
console.log( mike ) ;
console.log( mike.eat() ) ;
mike.weapon = "Nunchakus" ;
console.log( mike.attack() ) ;

// Public and Private Methods.
console.log( "Examples of Public and Private Methods" ) ;

class Turtle2 {
    constructor( name, color ) {
        this.name = name ;
        let _color = color ;
        this.setColor = ( color ) => {
            if ( typeof color === 'string' ) {
                return _color = color ;
                } else {
                    throw new Error( 'Color must be a string' ) ;
                } ;
            } ;
        this.getColor = () => _color ;
    } ;
} ;

const raph = new Turtle2( "Raphael", "Red" ) ;
console.log( raph ) ;
console.log( raph.getColor() ) ;
// console.log( raph.setColor( 4 ) ) ;

// Inheritance Using extends.
console.log( "Examples of Inheritance Using extends" ) ;

class Turtle3 {
    constructor( name ) {
        this.name = name ;
    } ;
    sayHi() {
        return `Hi dude, my name is ${this.name}` ;
    } ;

    swim() {
        return `${this.name} paddles in the water`;
    } ;
} ;

class NinjaTurtle extends Turtle3 {
    constructor( name ) {
        super( name ) ;
        this.weapon = 'hands' ;
    } ;
    attack() { return `Feel the power of my ${this.weapon}!` } ; 
} ;

const don = new NinjaTurtle( "Donatello" ) ;
console.log( don ) ;
console.log( don.sayHi() ) ;
console.log( don.attack() ) ;

// Adding Methods to Built-in Objects.
console.log( "Examples of Adding Methods to Built-in Objects" ) ;

Number.prototype.isEven = function() {
    return this % 2 === 0 ;
} ;

Number.prototype.isOdd = function() {
    return this % 2 === 1 ;
} ;

console.log( 42..isEven() ) ;
console.log( 765234..isOdd() ) ;

Array.prototype.first = function() {
    return this[0] ;
} ;

Array.prototype.last = function() {
    return this[this.length -1] ;
} ;

const turtles = [ "Leonardo", "Donatello", "Michaelangelo", "Raphael" ] ;
console.log( turtles.first() ) ;
console.log( turtles.last() ) ;

// Creating Objects from Other Objects.
console.log( "Examples of Creating Objects from Other Objects" ) ;

const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log( 'Walking' ) ; }
} ;

const lois = Object.create( Human ) ;
console.log( lois ) ;

// Object-Based Inheritance.
console.log( "Examples of Object-Based Inheritance" ) ;

const Superhuman = Object.create( Human ) ;

Superhuman.change = function() {
return `${this.realName} goes into a phone box and comes out as ${this.name}!` ;
} ;

const superman = Object.create( Superhuman ) ;
superman.name = 'Superman' ;
superman.realName = 'Clark Kent' ;
console.log( superman.change() ) ;

// Adding init() method to accept initialization properties.
Superhuman.init = function( name, realName ) {
    this.name = name ;
    this.realName = realName ;
    this.init = undefined ; // This line removes the init function, so it can only be called once.
    return this ;
} ;

// Easily create an object and initialize it.
const batman = Object.create( Superhuman ) ;
batman.init( 'Batman', 'Bruce Wayne' ) ;

console.log( batman.change() ) ;

// Single line create an object and initialize it.
const aquaman = Object.create( Superhuman ).init( 'Aquaman', 'Arthur Curry' ) ;
console.log( aquaman.change() ) ;

// Mixing.
console.log( "Examples of Mixin" ) ;

function mixin( target, ...objects ) {
    for ( const object of objects ) {   
        if ( typeof object === 'object' ) {
            for ( const key of Object.keys( object ) ) {
                if ( typeof object[key] === 'object' ) {
                    target[key] = Array.isArray(object[key]) ? [] : {} ;
                    mixin( target[key], object[key] ) ;
                } else {
                    Object.assign( target, object ) ;  
                } ;
            } ;
        } ;
    } ;
    return target;
} ;

const a = {}, b = { foo: 'bar' }, c = { numbers: [1,2,3] } ;
console.log( mixin( a, b, c ) ) ;

// Using Mixins to Add Properties.
console.log( "Examples of Using Mixins to Add Properties" ) ;

const wonderWoman = Object.create( Superhuman ) ;
mixin( wonderWoman, { name: 'Wonder Woman', realName: 'Diana Prince' } ) ;
console.log( wonderWoman.change() ) ;

// Using the Mixin Function to Add Modular Functionality.
console.log( "Examples of Using the Mixin Function to Add Modular Functionality" ) ;

const flight = {
    fly() {
        console.log( `Up, up and away! ${this.name} soars through the air!` ) ;
        return this ;
    }
} ;

const superSpeed = {
    move() {
        console.log( `${this.name} can move faster than a speeding bullet!` ) ;
        return this ;
    }  
} ;

const xRayVision = {
    xray() {
        console.log( `${this.name} can see right through you!` ) ;
        return this ;
    }  
} ;

mixin( superman, flight, superSpeed, xRayVision ) ;
mixin( wonderWoman, flight, superSpeed ) ;

console.log( superman.xray() ) ;
console.log( wonderWoman.fly() ) ;

// Chaining Functions.
console.log( "Examples of Chaining Functions" ) ;

console.log( superman.fly().move().xray() ) ;

// Binding this.
console.log( "Examples of Binding this" ) ;

superman.friends = [ batman, wonderWoman, aquaman ]

superman.findFriends = function() {
    this.friends.forEach( function( friend ) {
        console.log( `${friend.name} is friends with ${this.name}` ) ;
    } ) ;
} ;

console.log( superman.findFriends() ) ;

// Use that = this.
console.log( "Examples of Use that = this" ) ;

superman.findFriends = function() {
    const that = this ;
    this.friends.forEach( function( friend ) {
        console.log( `${friend.name} is friends with ${that.name}` ) ;
    } ) ;
} ;

console.log( superman.findFriends() ) ;

// Use bind(this).
console.log( "Examples of Use bind(this)" ) ;

superman.findFriends = function() {
    this.friends.forEach( function( friend ) {
        console.log( `${friend.name} is friends with ${this.name}` ) ;
    }.bind( this ) ) ;
} ;

console.log( superman.findFriends() ) ;

// Use for-of Instead Of forEach().
console.log( "Examples of Use for-of Instead Of forEach()" ) ;

superman.findFriends = function() {
    for( const friend of this.friends ) {
        console.log( `${friend.name} is friends with ${this.name}` ) ;
    } ;
} ;

console.log( superman.findFriends() ) ;

// Use Arrow Functions.
console.log( "Examples of Use Arrow Functions" ) ;

superman.findFriends = function() {
    this.friends.forEach( ( friend ) => {
        console.log( `${friend.name} is friends with ${this.name}` ) ;
    } ) ;
} ;

console.log( superman.findFriends() ) ;

// Borrowing Methods from Prototypes.
console.log( "Examples of Borrowing Methods from Prototypes" ) ;

const fly = superman.fly ;

console.log( fly.call( batman ) ) ;