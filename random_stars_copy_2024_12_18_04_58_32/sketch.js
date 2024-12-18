let stars = []; //global variable (array)
let numStars = 400; //variable to control number of stard

// UFO position variables
let ufoX = 0;
let ufoY = 250;

// UFO speed
let ufoSpeed = 2;

// UFO color
let ufoColor = "#D3D3D3";



function setup() {
  createCanvas(400, 400);

  //declare and initialize our iterator (variable named i)
  //condition to check, if true, run code in curly brackets
  //increment the iterator
  for (let i = 0; i < numStars; i++) {
    stars[i] = createVector(random(width), random(height), random(1,6));
}
  

  
}

function draw() {
  background(0);
  //the first element of an array is at index 0
  
  for (let i = 0; i < numStars; i++){
    ellipse(stars[i].x, stars[i].y, stars[i].z,stars[i].z);
  }
    drawUFO();
  
  // Move UFO
  ufoX += ufoSpeed;

  // Reset UFO position when it goes off screen
  if (ufoX > width) {
    ufoX = -100; // Start from the left
  }
}



// Draw the UFO
function drawUFO() {
  push();
  translate(ufoX, ufoY);
  
  // UFO body
  fill(ufoColor);
  ellipse(0, 0, 100, 50); // Body
  
  // Dome
  fill(173, 216, 230, 180); // Transparent blue
  ellipse(0, -20, 60, 30); // Dome
  
  // Lights
  fill(255, 255, 0); // Yellow lights
  ellipse(-30, 15, 10, 10); 
  ellipse(0, 15, 10, 10); 
  ellipse(30, 15, 10, 10);
  //alien here
  pop();
}

// Change UFO color on mouse press
function mousePressed() {
  ufoColor = color(random(255), random(255), random(255)); // Randomize color
}