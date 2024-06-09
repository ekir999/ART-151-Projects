const pallete_side_length = 20; // constant length of a side of a square color pallete
const canvas_height = 230; // constant length of the canvas height
const canvas_width = 250; // constant lentgh of the canvas width
const colors_array = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black','brown', 'pink']; // list of colors in an array
let color_selected = colors_array[7]; // initally sets the color selected to the color black

let play_click_sound; // click_sound file
// preload function
function preload() {
  play_click_sound = loadSound('click_sound.mp3');
}

let button; // button instance
// bucket_tool function
function bucket_tool(){
  button = createButton('Bucket Tool');
  button.position(100, 300);
  button.mousePressed(select_bucket_tool);
}

let slider; // slider instance
// pixel_size_slider function
function pixel_size_slider(){
  slider = createSlider(0, 20);
  slider.position(10, 350);
  slider.style('width', '80px');
}

// canvas_board function
function canvas_board(canvas_width, canvas_height){
  fill(colors_array[6]);
  strokeWeight(3);
  stroke(0);
  rect(100, 50, canvas_width, canvas_height);
  noStroke();
  noFill();
}

function select_bucket_tool(){
  canvas_board(canvas_width, canvas_height)
}

// red_color_pallete function
function red_color_pallete(pallete_side_length){
  fill(colors_array[0]);
  strokeWeight(3);
  stroke(0);
  rect(30, 20, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// orange_color_pallete function
function orange_color_pallete(pallete_side_length){
  fill(colors_array[1]);
  strokeWeight(3);
  stroke(0);
  rect(30, 50, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// yellow_color_pallete function
function yellow_color_pallete(pallete_side_length){
  fill(colors_array[2]);
  strokeWeight(3);
  stroke(0);
  rect(30, 80, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// green_color_pallete function
function green_color_pallete(pallete_side_length){
  fill(colors_array[3]);
  strokeWeight(3);
  stroke(0);
  rect(30, 110, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// blue_color_pallete function
function blue_color_pallete(pallete_side_length){
  fill(colors_array[4]);
  strokeWeight(3);
  stroke(51);
  rect(30, 140, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// purple_color_pallete function
function purple_color_pallete(pallete_side_length){
  fill(colors_array[5]);
  strokeWeight(3);
  stroke(0);
  rect(30, 170, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// white_color_pallete function
function white_color_pallete(pallete_side_length){
  fill(colors_array[6]);
  strokeWeight(3);
  stroke(0);
  rect(30, 200, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// black_color_pallete function
function black_color_pallete(pallete_side_length){
  fill(colors_array[7]);
  strokeWeight(3);
  stroke(0);
  rect(30, 230, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// brown_color_pallete function
function brown_color_pallete(pallete_side_length){
  fill(colors_array[8]);
  strokeWeight(3);
  stroke(0);
  rect(30, 260, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// red_color_pallete function
function pink_color_pallete(pallete_side_length){
  fill(colors_array[9]);
  strokeWeight(3);
  stroke(0);
  rect(30, 290, pallete_side_length, pallete_side_length);
  noStroke();
  noFill();
}

// setup function
function setup() {
  createCanvas(400, 400);
  pixel_size_slider();
  bucket_tool();
}

// draw function
function draw() {
  background(235);
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
  if (mouseIsPressed){
    if ((mouseX > 30 && mouseX < 50) && (mouseY > 20 && mouseY < 40)){
        color_selected = colors_array[0];
     } else if ((mouseX > 30 && mouseX < 50) && (mouseY > 50 && mouseY < 70)){
        color_selected = colors_array[1];
     } else if ((mouseX > 30 && mouseX < 50) && (mouseY > 80 && mouseY < 100)){
        color_selected = colors_array[2];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 110 && mouseY < 130)){
        color_selected = colors_array[3];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 140 && mouseY < 160)){
        color_selected = colors_array[4];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 170 && mouseY < 190)){
        color_selected = colors_array[5];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 200 && mouseY < 220)){
        color_selected = colors_array[6];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 230 && mouseY < 250)){
        color_selected = colors_array[7];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 260 && mouseY < 280)){
        color_selected = colors_array[8];
    }  else if ((mouseX > 30 && mouseX < 50) && (mouseY > 290 && mouseY < 310)){
        color_selected = colors_array[9];
    }
  }
  if (mouseIsPressed && (mouseX > 100 && mouseX < 350) && (mouseY > 50 && mouseY < 280)){
    stroke(color_selected);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}