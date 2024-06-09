// 80's hip hop images
let img; // Run-DMC hip hop group
let img2; // N.W.A hip hop group
let img3; // Roland TR-808 drum machine
let play_808_sound; // '808 sample' sound file
// preload function
function preload() {
  img = loadImage('Run-DMC.jpg');
  img2 = loadImage('NWA.jpg');
  img3 = loadImage('Roland-TR-808.jpg');
  play_808_sound = loadSound('808.wav');
}

// setup function
function setup() {
  createCanvas(400, 700);
}

// mouseClicked function
function mouseClicked(){
  if ((mouseX > 100 && mouseX < 250) && (mouseY > 450 && mouseY < 600)){
    play_808_sound.play();
  }
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 190, 160);
  image(img3, 100, 450, 150, 150);
}