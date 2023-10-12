let currentImage = 1;
const totalImages = 5;
let img;

function preload() {
    // Load the first image during preload
    img = loadImage(`ADED${currentImage}.jpg`); //${currentImage} calls for a number from the currentImage variable, adds the number to the image name, and then loads that image from the folder
}

function setup() {
    createCanvas(900, 600).parent('image-frame'); // Create canvas and place it inside the frame
    noLoop(); // Prevent continuous looping
    
    // Engages a function if selected
    select('.left').mousePressed(scrollLeft);
    select('.right').mousePressed(scrollRight);
}

function draw() {
    image(img, 0, 0, width, height); // Display the current image
}

function scrollLeft() { //Function to scroll left. Subtracts 1 from the currentImage variable, if the result is less than 1 loops back to the last image defined by totalImages
    currentImage = (currentImage - 1) < 1 ? totalImages : currentImage - 1; // Mathematical syntax from vanilla JS
    loadImage(`ADED${currentImage}.jpg`, (newImg) => {
        img = newImg; // Load and replace the image
        redraw(); // Redraw the canvas
    });
}

function scrollRight() {
    currentImage = (currentImage + 1) > totalImages ? 1 : currentImage + 1;
    loadImage(`ADED${currentImage}.jpg`, (newImg) => {
        img = newImg; 
        redraw(); 
    });
}