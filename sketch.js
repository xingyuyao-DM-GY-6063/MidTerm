let NUM_FEATHERS = 100; // Number of feathers
let feathers = []; // Array to hold feather objects
let featherImg; // Variable for feather image

function preload() {
  // Load the feather image
  featherImg = loadImage('peacock-feather.png'); // Replace with your image filename
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  // Create feather objects
  for (let cnt = 0; cnt < NUM_FEATHERS; cnt++) {
    let aFeather = {
      x: random(width),
      y: random(height),
      size: random(100, 400), // Random size for each feather
      alpha: random(50, 200), // Random transparency for each feather
      dx: random(-5, 5), // Horizontal speed
      dy: random(-5, 5), // Vertical speed
    };

    feathers.push(aFeather);
  }
}

function draw() {
  background(20, 139, 139);

  // Draw and animate each feather
  for (let idx = 0; idx < feathers.length; idx++) {
    let mFeather = feathers[idx];

    // Set the transparency
    tint(255, mFeather.alpha); // Adjust transparency

    // Draw the feather
    image(featherImg, mFeather.x, mFeather.y, mFeather.size, mFeather.size);

    // Update feather position
    mFeather.x += mFeather.dx;
    mFeather.y += mFeather.dy;

    // Reset position if it goes out of bounds
    if (mFeather.y < 0 || mFeather.y > height) {
      mFeather.y = random(height);
    }
    if (mFeather.x < 0 || mFeather.x > width) {
      mFeather.x = random(width);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas on window resize
}
