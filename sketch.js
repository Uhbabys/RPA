let buttons = [];
let buttonContainer;

function preload() {
  backgroundImage = loadImage('barbfence.jpg');
}

function setup() {
  createCanvas(windowWidth, 200);
  buttonContainer = createDiv();
  buttonContainer.style("display", "flex");
  buttonContainer.style("justify-content", "center");
  buttonContainer.style("align-items", "center");
  buttonContainer.style("font-family", "Source Code Pro");

  // Array of data, contains names of buttons and associated links
  const buttonData = [
    { text: "Art vs. Government", link: "page1.html" },
    { text: "Art vs. Society", link: "page2.html" },
    { text: "Art vs. Art", link: "page3.html" }
  ];

  
  for (let i = 0; i < 3; i++) {
    let x = (i + 1) * width / 4; // Defines positioning of buttons on the canvas
    let y = height / 2;
    let text = buttonData[i].text; // Retrieves text from the array
    let link = buttonData[i].link; // Retrieves link from the array
    buttons.push(new GlitchButton(x, y, text, link)); // Adds 'GlitchButton' element containing all of the above to an empty array 'buttons'
  }

  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  image(backgroundImage, 0, 0, width, height);
  background(220, 15);

  // Loop iterating through all buttons in the array
  for (let button of buttons) {
    button.update(); // Reguraly updates the button to make sure effects are played 
    button.display();
  }
}

// Defines properties of buttons in the array
class GlitchButton {
  constructor(x, y, text, link) {
    this.x = x; // 'this' keyword is assigning properties to the current instance within a class
    this.y = y;
    this.text = text;
    this.link = link;
    this.isHovered = false;
  }

  // Defines when the button is hovered over
  update() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    this.isHovered = d < 50;
  }


  // Defines the glitch effect
  glitch() { 
    for (let i = 0; i < 30; i++) { // Loop that randomly moves characters within 30 pixels of the button
      let x = random(this.x - 30, this.x + 30);
      let y = random(this.y - 30, this.y + 30);
      fill(random(255), random(255), random(255)); // Fills characters with random colors
      text(this.text, x, y); // Text of this specific instance is displayed in the back
    }
  }

  display() {
    if (this.isHovered) { // Defines the text and text position for the buttons, when active and when not
      this.glitch();
      fill(255);  
      stroke(0); 
      strokeWeight(10); 
      text("PROTEST", this.x, this.y); 
    } else {
      fill(0);
      stroke('red'); 
      strokeWeight(2); 
      text(this.text, this.x, this.y);
    }
  }

  click() {
    window.location.href = this.link; // Open the linked page 
  }
}

function mousePressed() {
  for (let button of buttons) { // Loop iterating through all buttons in the array
    if (button.isHovered) {
      button.click(); // Open the linked page when the button is clicked
    }
  }
}
