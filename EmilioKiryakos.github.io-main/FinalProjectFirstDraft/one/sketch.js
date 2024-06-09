const pallete_side_length = 20; // constant length of a side of a square color pallete
const canvas_height = 230; // constant length of the canvas height
const canvas_width = 250; // constant lentgh of the canvas width

let play_click_sound; // click_sound file
// preload function
function preload() {
  play_click_sound = loadSound('click_sound.mp3');
}

// let slider; // slider instance
// // pixel_size_slider function
// function pixel_size_slider(){
//   slider = createSlider(0, 255, 100);
//   slider.position(10, 350);
//   slider.style('width', '80px');
// }

// canvas_board function
function canvas_board(width, height){
  fill('white');
  strokeWeight(3);
  stroke(51);
  rect(100, 50, canvas_width, canvas_height);
  noStroke();
  noFill();
}

// red_color_pallete function
function red_color_pallete(pallete_side_length){
  fill('red');
  strokeWeight(3);
  stroke(51);
  rect(30, 20, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// orange_color_pallete function
function orange_color_pallete(pallete_side_length){
  fill('orange');
  strokeWeight(3);
  stroke(51);
  rect(30, 50, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// yellow_color_pallete function
function yellow_color_pallete(pallete_side_length){
  fill('yellow');
  strokeWeight(3);
  stroke(51);
  rect(30, 80, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// green_color_pallete function
function green_color_pallete(pallete_side_length){
  fill('green');
  strokeWeight(3);
  stroke(51);
  rect(30, 110, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// blue_color_pallete function
function blue_color_pallete(pallete_side_length){
  fill('blue');
  strokeWeight(3);
  stroke(51);
  rect(30, 140, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// purple_color_pallete function
function purple_color_pallete(pallete_side_length){
  fill('purple');
  strokeWeight(3);
  stroke(51);
  rect(30, 170, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// white_color_pallete function
function white_color_pallete(pallete_side_length){
  fill('white');
  strokeWeight(3);
  stroke(51);
  rect(30, 200, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// black_color_pallete function
function black_color_pallete(pallete_side_length){
  fill('black');
  strokeWeight(3);
  stroke(51);
  rect(30, 230, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// brown_color_pallete function
function brown_color_pallete(pallete_side_length){
  fill('brown');
  strokeWeight(3);
  stroke(51);
  rect(30, 260, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// red_color_pallete function
function pink_color_pallete(pallete_side_length){
  fill('pink');
  strokeWeight(3);
  stroke(51);
  rect(30, 290, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

let pixel; // pixel color grabber variable
// mouseClicked function
function mouseClicked(){
  if ((mouseX > 100 && mouseX < 350 ) && (mouseY > 50 && mouseY < 280)){
    fill('red');
    rect(mouseX, mouseY, 12, 12);
  }
}

// setup function
function setup() {
  createCanvas(400, 400);
  // pixel_size_slider();
}

// draw function
function draw() {
  background(235);
  pixel = get(mouseX, mouseY);
  canvas_board(canvas_width, canvas_height);
  red_color_pallete(pallete_side_length);
  orange_color_pallete(pallete_side_length);
  yellow_color_pallete(pallete_side_length);
  green_color_pallete(pallete_side_length);
  blue_color_pallete(pallete_side_length);
  purple_color_pallete(pallete_side_length);
  white_color_pallete(pallete_side_length);
  black_color_pallete(pallete_side_length);
  brown_color_pallete(pallete_side_length);
  pink_color_pallete(pallete_side_length);
  // console.log(mouseX, mouseY);
}