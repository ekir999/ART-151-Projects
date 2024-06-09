// 2000's hip hop images
let img; // Kayne West
let img2; // Kid Cudi
let img3; // FL Studio Logo
let play_fl_studio_intro_sound; // 'FL Studio intro' sound file
// preload function
function preload() {
  img = loadImage('KayneWest.jpg');
  img2 = loadImage('KidCudi.jpg');
  img3 = loadImage('FLStudio.jpg')
  play_fl_studio_intro_sound = loadSound('FLStudioIntro.mp3');
}

// setup function
function setup() {
  createCanvas(400, 700);
}

// mouseClicked function
function mouseClicked(){
  if ((mouseX > 125 && mouseX < 285) && (mouseY > 450 && mouseY < 610)){
    play_fl_studio_intro_sound.play();
  }
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 160, 160);
  image(img3, 125, 450, 160, 160);
}