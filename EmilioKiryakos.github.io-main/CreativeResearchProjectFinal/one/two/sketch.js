// 70's hip hop images
let img; // block party image
let img2; // DJ Kool Herc with Coke La Rock image
// preload function
function preload() {
  img = loadImage('block-party.jpg');
  img2 = loadImage('dj-kool-herc.jpg');
}

// setup function
function setup() {
  createCanvas(400, 500);
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 190, 160);
}