// 80's hip hop images
let img; // Run-DMC hip hop group
let img2; // N.W.A hip hop group
let img3; // Roland TR-808 drum machine
function preload() {
  img = loadImage('Run-DMC.jpg');
  img2 = loadImage('NWA.jpg');
  img3 = loadImage('Roland-TR-808.jpg');
}

// setup function
function setup() {
  createCanvas(400, 700);
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 190, 160);
  image(img3, 100, 450, 150, 150);
}