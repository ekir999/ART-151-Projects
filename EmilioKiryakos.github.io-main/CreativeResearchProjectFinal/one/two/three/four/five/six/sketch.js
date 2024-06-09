// 2010's hip hop images
let img; // Juice WRLD image
let img2; // Tyler the Creator image
let img3; // Spotify Logo image
function preload() {
  img = loadImage('JuiceWRLD.jpg');
  img2 = loadImage('TylerTheCreator.jpg');
  img3 = loadImage('Spotify.jpg');
}

// setup function
function setup() {
  createCanvas(400, 700);
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 160, 160);
  image(img3, 125, 450, 160, 160);
}