let NUM_FEATHERS = 100; // Number of feathers
let feathers = []; // Array to hold feather objects
let featherImg; // Variable for feather image
let quotes = []; // Array to hold Pride and Prejudice quotes
let currentQuoteIndex = 0; // Index to track the current quote
let customFont; // Variable to hold the font

function preload() {
  // Load the feather image
  featherImg = loadImage("peacock-feather.png");

  // Load the classic lines from Pride and Prejudice
  quotes = [
    "Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.",
    "Not all of us can afford to be romantic.",
    "If your feelings are still what they were last April, tell me so at once. My affections and wishes have not changed. But one word from you will silence me forever.",
    "Misery can be caused by someone being just weak and indecisive.",
    "Not all of us can afford to be romantic."
  ];

    // Load the custom font file
    customFont = loadFont('GreatVibes-Regular.ttf'); // Replace with your font file name
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Create feather objects
  for (let cnt = 0; cnt < NUM_FEATHERS; cnt++) {
    let aFeather = {
      x: random(width),
      y: random(height),
      size: random(50, 400), // Random size for each feather
      alpha: random(50, 200), // Random transparency for each feather
      dx: random(-5, 5), // Horizontal speed
      dy: random(-5, 5), // Vertical speed
      angle: random(TWO_PI), // Random initial angle
      da: random(-0.05, 0.05) // Random rotational speed
    };

    feathers.push(aFeather);
  }

  textFont(customFont); // Apply the custom font to the text
  textSize(32); // Set font size
  fill(50); // Set text color
  textAlign(CENTER, CENTER);

}

function draw() {
  background(20, 139, 139);

  // Draw and animate each feather
  for (let idx = 0; idx < feathers.length; idx++) {
    let mFeather = feathers[idx];

    // Set the transparency
    tint(255, mFeather.alpha); // Adjust transparency

    // Apply transformations for position and rotation
    push();
    translate(mFeather.x, mFeather.y); // Move to the feather's position
    rotate(mFeather.angle); // Rotate by the feather's angle

    // Draw the feather image at the origin after rotation
    imageMode(CENTER);
    image(featherImg, 0, 0, mFeather.size, mFeather.size);
    pop();

    // Update feather position and angle
    mFeather.x += mFeather.dx;
    mFeather.y += mFeather.dy;
    mFeather.angle += mFeather.da; // Update the rotation angle

    // Reset position if it goes out of bounds
    if (mFeather.y < 0 || mFeather.y > height) {
      mFeather.y = random(height);
    }
    if (mFeather.x < 0 || mFeather.x > width) {
      mFeather.x = random(width);
    }
  }

  // Display the current quote at the center of the screen
  fill(0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text(quotes[currentQuoteIndex], width / 2, height - 200); // Display the quote near the bottom
  
  textSize(100);
  text("Pride and Prejudice", width / 2, height / 2); 
}

function mousePressed() {
  // Switch to the next quote on each mouse click
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas on window resize
}