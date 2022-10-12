// Ch6: The Secret Life of Objects.
console.log( "Chapter 6: The Secret Life of Objects" ) ;

// A Vector Type.
console.log( "A Vector Type" ) ;

class Vec {
    constructor( x, y ) {
        this.x = x ;
        this.y = y ;
    } ;
  
    plus( vector ) {
        return new Vec( this.x + vector.x, this.y + vector.y ) ;
    } ;
  
    minus( vector ) {
        return new Vec( this.x - vector.x, this.y - vector.y ) ;
    } ;
  
    get length() {
        return Math.sqrt( this.x * this.x + this.y * this.y ) ;
    } ;
} ;

console.log( new Vec( 1, 2 ).plus( new Vec( 2, 3 ) ) ) ;
console.log( new Vec( 1, 2 ).minus( new Vec( 2, 3 ) ) ) ;
console.log( new Vec( 3, 4 ).length ) ;

// Groups.
console.log( "Groups" ) ;

class Group {
    constructor() {
        this.members = [];
    } ;

    add( value ) {
        if ( ! this.has( value ) ) {
            this.members.push( value ) ;
        } ;
    } ;

    delete( value ) {
        this.members = this.members.filter( v => v !== value ) ;
    } ;

    has( value ) {
        return this.members.includes( value ) ;
    } ;

    static from( collection ) {
        let group = new Group ;
        for ( let value of collection ) {
            group.add( value ) ;
        } ;
        return group ;
    } ;

    [Symbol.iterator]() {
        return new GroupIterator( this ) ;
    } ;
} ;

let group = Group.from( [10, 20] ) ;
console.log( group.has( 10 ) ) ;
console.log( group.has( 30 ) ) ;
group.add( 10 ) ;
group.delete( 10 ) ;
console.log( group.has( 10 ) ) ;

// Iterable Groups.
console.log( "Iterable Groups" ) ;

class GroupIterator {
    constructor( group ) {
        this.group = group ;
        this.position = 0 ;
    } ;
  
    next() {
        if ( this.position >= this.group.members.length ) {
            return { done: true } ;
        } else {
            let result = {value: this.group.members[this.position], done: false};
            this.position++ ;
            return result ;
        } ;
    } ;
} ;

for ( let value of Group.from( [ "a", "b", "c" ] ) ) {
    console.log( value ) ;
} ;

// Borrowing a Method.
console.log( "Borrowing a Method" ) ;

let map = { one: true, two: true, hasOwnProperty: true } ;
console.log( Object.prototype.hasOwnProperty.call( map, "one" ) ) ;