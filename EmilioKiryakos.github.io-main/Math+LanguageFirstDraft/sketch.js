const side_length = 400; // length of one side of the screen to make the canvas

// animating_smiley_face function for making the smiley face animated based on mouse interactions
function animating_smiley_face(){
  
}

// text function for displaying text for user to know the emotion and also acts as debugging text for me to see if the sketch is working
function display_text(){
  fill('white');
  textSize(14);
  textAlign(RIGHT);
  text('The Smiley feels ABCD', 150, 30);
}

// changing_canvas_color function which changes the canvas colors based on mouse interactions
function changing_canvas_color(){
  let red = map(mouseY, 0, side_length, 0, 255);
  let green = map(mouseX, 0, side_length, 0, 220);
  let blue = map(mouseX, 0, side_length, 0, 20);
  background(red, green, blue);
}

// animation function which animates the entire sketch
function animation(){
  changing_canvas_color();
  animating_smiley_face();
}

// setup function to setup canvas
function setup() {
  createCanvas(side_length, side_length);
}

// draw function to keep animating the sketch
function draw() {
  animation();
  display_text();
}