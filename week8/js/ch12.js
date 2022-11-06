// Ch12.
console.log( "Chapter 12" ) ;

const canvas = document.getElementById( "myCanvas" ) ;

// Getting the Context.

const context = canvas.getContext( "2d" ) ;
console.log( context ) ;

// Filling Our Brush with Color.

context.strokeStyle = "red" ;
context.fillStyle = "rgba(0, 0, 255, 0.5)" ;

// Drawing a Rectangle to the Canvas.

context.fillRect( 10, 10, 100, 100 ) ; 
context.strokeRect( 10, 10, 100, 100 ) ;

// Variations on fillStyle.

function drawPattern() {
    let canvas = document.getElementById( "myCanvas2" ) ;
    let context = canvas.getContext( "2d" ) ;
    context.strokeStyle = "red" ;

    let img = new Image() ;
    img.src = "images/bg-bike.png" ;
    img.onload = function() {
        let pattern = context.createPattern( img, "repeat" ) ; 
        context.fillStyle = pattern ;
        context.fillRect( 10, 10, 100, 100 ) ;
        context.strokeRect( 10, 10, 100, 100) ;             
    } ;
} ;

drawPattern() ;

function drawGradient() {
    let canvas = document.getElementById( "myCanvas3" ) ;
    let context = canvas.getContext( "2d" ) ;
    context.strokeStyle = "red" ;
    let gradient = context.createLinearGradient( 0, 0, 0, 200 ) ;
    gradient.addColorStop( 0, "blue" ) ;
    gradient.addColorStop( 1, "white" ) ;
    context.fillStyle = gradient ;
    context.fillRect( 10, 10, 100, 100 ) ;
    context.strokeRect( 10, 10, 100, 100 ) ;
} ;

drawGradient() ;

// Drawing Other Shapes by Creating Paths.

let newCanvas = document.getElementById( "myCanvas4" ) ;
function drawCircle( canvas ) {
    let context = canvas.getContext( "2d" ) ;
    context.beginPath() ;
    context.arc( 50, 50, 30, 0, Math.PI * 2, true ) ;
    context.closePath() ;
    context.strokeStyle = "red" ;
    context.fillStyle = "blue" ;
    context.lineWidth = 3 ;
    context.fill() ;
    context.stroke() ;
} ;

drawCircle( newCanvas ) ;

// Drawing an Image to the Canvas.

window.addEventListener( "load", drawImageToCanvas, false ) ;
function drawImageToCanvas() {
    let canvas = document.getElementById( "myCanvas6" ) ;
    let context = canvas.getContext( "2d" ) ;
    let image = document.getElementById( "myImageElem" ) ;
    context.drawImage( image, 68, 68 ) ;
} ;

// Converting an Image from Color to Black and White.

window.addEventListener( "load", manipulateImage, false ) ;
function manipulateImage() {
    let canvas = document.getElementById( "myCanvas7" ) ;
    let context = canvas.getContext( "2d" ) ;
    let image = document.getElementById( "myImageElem" ) ;
    context.drawImage( image, 68, 68 ) ;
    let imageData = context.getImageData( 0, 0, 200, 200 ) ;
    let red, green, blue, grayscale ;
    for ( let i = 0 ; i < imageData.data.length ; i += 4 ) {
        red = imageData.data[i] ;
        green = imageData.data[i + 1] ;
        blue = imageData.data[i + 2] ;
        grayscale = red * 0.3 + green * 0.59 + blue * 0.11 ;
        imageData.data[i] = grayscale ;
        imageData.data[i + 1] = grayscale ;
        imageData.data[i + 2] = grayscale ;
    } ;
    context.putImageData( imageData, 0, 0 ) ;
} ;

// Manipulating Video with Canvas.

window.addEventListener( "load", makeVideoOldTimey, false ) ;
function makeVideoOldTimey() {
    let video = document.getElementById( "video" ) ;
    let canvas = document.getElementById( "myCanvas8" ) ;
    let context = canvas.getContext( "2d" ) ;
    video.addEventListener( "play", () => draw( video, context, canvas ), false ) ;
} ;

function draw( video, context, canvas ) {
    if ( video.paused || video.ended ) return false ;
    drawOneFrame( video, context, canvas ) ;

    // Start Over!
    setTimeout( function() { draw( video, context, canvas ) ; }, 0 ) ;
} ;

function drawOneFrame( video, context, canvas ) {
    // Draw the video onto the canvas.
    context.drawImage( video, 0, 0, canvas.width, canvas.height ) ;
    let imageData = context.getImageData( 0, 0, canvas.width, canvas.height ) ;
    let pixelData = imageData.data ;

    // Loop through the red, green and blue pixels, turning them grayscale.
    let red, green, blue, grayscale ;
    for ( var i = 0 ; i < pixelData.length ; i += 4 ) {
        red = pixelData[i] ;
        green = pixelData[i + 1] ;
        blue = pixelData[i + 2] ;

        // We'll ignore the alpha value, which is in position i + 3.
        
        grayscale = red * 0.3 + green * 0.59 + blue * 0.11 ;
        
        pixelData[i] = grayscale ;
        pixelData[i + 1] = grayscale ;
        pixelData[i + 2] = grayscale ;
    } ;     
    context.putImageData( imageData, 0, 0 ) ; 
} ;

// Displaying Text on the Canvas.

function drawText() {
    let canvas = document.getElementById( "myCanvas9" ) ;
    let context = canvas.getContext( "2d" ) ;
    context.fillStyle = "black" ;
    context.textAlign = "center" ;
    context.font = "18px Tahoma, Geneva, sans-serif" ;
    context.fillText( "Example Text in Canvas!", 100, 40 ) ;
    context.fillText( "Hello World!", 100, 100 ) ;
} ;

drawText() ;

// Making Elements Draggable.

let mice = document.querySelectorAll( "#mouseContainer img" ) ;
let mouse = null ;
for ( var i = 0 ; i < mice.length ; i++ ) {
    mouse = mice[i] ;
    mouse.addEventListener( "dragstart", function ( event ) {
        // Handle the dragstart event.
        event.dataTransfer.setData( "text/plain", this.id ) ;
    } ) ;
} ;

let cat = document.getElementById( "cat" ) ;
cat.addEventListener( "dragover", function( event ) {
    event.preventDefault() ;
} ) ;

cat.addEventListener( "drop", function( event ) {
    const mouseHash = {
        mouse1: "NOMNOMNOM",
        mouse2: "Meow",
        mouse3: "Purrrrrr ..."
    } ;
    let catHeading = document.getElementById( "catHeading" ) ;

    // Change text of the header based on which mouse was dropped.
    let mouseID = event.dataTransfer.getData( "text/plain" ) ;
    catHeading.innerHTML = mouseHash[ mouseID ] ;

    // Get the img element for the mouse, and then remove it.
    let mousey = document.getElementById( mouseID ) ;
    mousey.parentNode.removeChild( mousey ) ;
    event.preventDefault() ;
} ) ;