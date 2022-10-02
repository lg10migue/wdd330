// Ch6.
console.log( "Chapter 6" ) ;

// Getting Elements.
console.log( "Examples of Getting Elements" ) ;

const body = document.body ;
console.log( typeof body ) ;

// nodeType property tells us what type of node it is.
console.log( body.nodeType ) ;

// nodeName property helps us to find the name of the element.
console.log( body.nodeName ) ;

// Getting An Element By Its ID.
console.log( "Examples of Getting An Element By Its ID" ) ;

const h1 = document.getElementById( "title" ) ;
console.log( h1 ) ;

// Getting Elements By Their Tag Name.
console.log( "Examples of Getting Elements By Their Tag Name" ) ;

const listItems = document.getElementsByTagName( "li" ) ;
console.log( listItems[16] ) ;
console.log( listItems[17] ) ;
console.log( listItems[18] ) ;

// Getting Elements By Their Class Name.
console.log( "Examples of Getting Elements By Their Class Name" ) ;

let heroes = document.getElementsByClassName( 'hero' ) ;
console.log( heroes ) ;

// Query Selectors.
console.log( "Examples of Query Selectors" ) ;

// querySelector() method allows to use CSS notation to find the first element in the
// document that matches the selector provided.
console.log( document.querySelector( "#bats" ) ) ;

// querySelectorAll() method also uses CSS notation but returns a node list of all
// the elements in the document that matches the selector provided.
console.log( document.querySelectorAll( ".hero" ) ) ;

// CSS pseudo-selectors can also be used to pinpoint a particular element.
const wonderWoman2 = document.querySelector( "ul#roster li:last-child" ) ;
console.log( wonderWoman2 ) ;

// The querySelector() method can be called on any element.
const ul = document.querySelector( 'ul#roster' ) ;
console.log( ul ) ;

// Now we can use the querySelector() method on this element, to find a <li> element with an id of 'bats'.
const theBatman = ul.querySelector( "li#bats" ) ;
console.log( theBatman ) ;

// Navigating the DOM Tree.
console.log( "Examples of Navigating the DOM Tree" ) ;

// The .childNodes property is a list of all the nodes that are children of the node concerned.
heroes = document.getElementById( "roster" ) ;
console.log( heroes.childNodes ) ;

// The .children property only returns any element nodes that are children of that node.
console.log( heroes.children ) ;

// The .parentNode property returns the parent node of an element.
console.log( wonderWoman2.parentNode ) ;

// Finding the Value of a Node.
console.log( "Examples of Finding the Value of a Node" ) ;

// Getting text node inside an element.
const textNode = wonderWoman2.firstChild ;
console.log( textNode ) ;

// Getting the text contained inside the text node.
console.log( textNode.nodeValue ) ;

// The .textContent property will return the text content of an element.
console.log( wonderWoman2.textContent ) ;

// Getting An Element's Attribute.
console.log( "Examples of Getting An Element's Attribute" ) ;

// The getAttribute() method returns the value of the attribute provided as an argument.
console.log( wonderWoman2.getAttribute( "class" ) ) ;

console.log( wonderWoman2.getAttribute( 'src' ) ) ;

// Setting An Element’s Attributes.
console.log( "Examples of Setting An Element's Attributes" ) ;

// The setAttribute() method can change the value of an element’s attributes if exists or not.
wonderWoman2.setAttribute( "class", "villain" ) ;
console.log( wonderWoman2.getAttribute( "class" ) ) ;

wonderWoman2.setAttribute( "id", "amazon" ) ;
console.log( wonderWoman2.getAttribute( "id" ) ) ;

// Dot Notation.
console.log( "Examples of Dot Notation" ) ;

// The legacy DOM allows access to attributes using dot notation.
console.log( wonderWoman2.id ) ;

// Modifiying the property using dot notation.
wonderWoman2.id = "test" ;
console.log( wonderWoman2.id ) ;

// Classes Of An Element.
console.log( "Examples of Classes Of An Element" ) ;

// The .className property allows the class of an element to be set directly. This method will overwrite all other
// classes that have already been set on the element.
console.log( wonderWoman2.className ) ;

wonderWoman2.className = "hero" ;

console.log( wonderWoman2.className ) ;

// The .classList property is a list of all the classes an element has. It has a number of methods
// that make it easier to modify the class of an element. 
console.log( wonderWoman2.classList ) ;

// The .add() method can be used to add a class to an element without overwriting any classes that already exist.
wonderWoman2.classList.add( "warrior" ) ;
console.log( wonderWoman2.className ) ;

// The .remove() method will remove a specific class from an element.
wonderWoman2.classList.remove( 'warrior' ) ;
console.log( wonderWoman2.className ) ;

// The .toggle() method is a particularly useful method that will add a class if an element doesn’t have
// it already, and remove the class if it does have it.

wonderWoman2.classList.toggle( 'hero' ) ; // This will remove the 'hero' class.
console.log( wonderWoman2.className ) ;
wonderWoman2.classList.toggle( 'hero' ) ; // This // will add the 'hero' class back.
console.log( wonderWoman2.className ) ;

// The .contains() method will check to see if an element has a particular class.
console.log( wonderWoman2.classList.contains( "hero" ) ) ;
console.log( wonderWoman2.classList.contains( "villain" ) ) ;

// Creating Dynamic Markup.
console.log( "Examples of Creating Dynamic Markup" ) ;

// Creating An Element.
// The .createElement() method takes a tag name and return that element.
// const flash = document.createElement( 'li' ) ;

// Creating a Text Node.
// The .createTextNode() method takes a string and create the text node.
// const flashText = document.createTextNode( 'Flash' ) ;

// Appending Nodes.
// The .appendChild() method will add another node (given as an argument) as a child node.
// flash.appendChild( flashText ) ;

// ShortWay of Creating an Element.
const flash = document.createElement( 'li' ) ;
flash.textContent = 'Flash' ;

// A Function To Create Elements.
function createElement ( tag, text ) {
    const el = document.createElement( tag ) ;
    el.textContent = text ;
    return el ;
} ;

const aquaman = createElement( 'li','Aquaman' ) ;

// Adding Elements to the Page.
heroes.appendChild( flash ) ;
heroes.appendChild( aquaman ) ;
console.log( heroes ) ;

// Remove Elements From a Page.
// The .removeChild() method can remove an element from a page.
heroes.removeChild( aquaman ) ;

// Replacing Elements on a Page.
// The .replaceChild() method can be used to replace one node with another.
console.log( h1 ) ;
const oldText = h1.firstChild ;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild( newText, oldText ) ;
console.log( h1 ) ;

// The .innerHTML element property returns all the child elements of an element as a string of HTML.
console.log( heroes.innerHTML ) ;

// The .innerHTML property is also writable and can be used to place a chunk of HTML inside an element.
h1.innerHTML = 'Suicide Squad' ;
console.log( h1 ) ;

// The power of the innerHTML property becomes even more apparent if you want to insert a
// large amount of HTML into the document.
heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Katana</li><li>Slipknot</li>';
console.log( heroes ) ;

// Updating CSS.
console.log( "Examples of Updating CSS" ) ;

const superman2 = heroes.children[0] ;

// Every element node has a style property.
superman2.style.border = "red 2px solid" ;

console.log( superman2.style.border ) ;

// Camel Case Properties.
// The CSS property names separated by dashes must be written in camelCase notation.
// For example, the CSS property background-color.
superman2.style.backgroundColor = 'blue' ;

console.log( superman2.style.backgroundColor ) ;

// Disappearing Act.
// The display property can be used to make elements dissaper and reappear.
superman2.style.display = "none" ;

// The element can be made to "reappear" by changing the display property to block.
// superman2.style.display = "block" ;