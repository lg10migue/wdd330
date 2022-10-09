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

console.log( "Examples of Use that = this" ) ;

