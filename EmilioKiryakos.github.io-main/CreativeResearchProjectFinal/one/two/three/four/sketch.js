// 90's hip hop images
let img; // 2Pac
let img2; // Snoop Dogg
function preload() {
  img = loadImage('2Pac.jpg');
  img2 = loadImage('SnoopDogg.jpg');
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