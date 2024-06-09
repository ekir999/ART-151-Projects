const size = 20; // constant size regardles of the shape that it is
const colors_array = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black','brown', 'pink']; // list of colors in an array

let play_pop_sound1; // pop_sound1 file
let play_pop_sound2; // pop_sound2 file
let play_pop_sound3; // pop_sound3 file
// preload function
function preload() {
  play_pop_sound1 = loadSound('pop_sound1.mp3');
  play_pop_sound2 = loadSound('pop_sound2.mp3');
  play_pop_sound3 = loadSound('pop_sound3.mp3');
}

// amimation_1 function
function animation_1(size){
  for (let i = 0; i < 5; i++){
    fill(colors_array[floor(random(0, 10))]);
    circle(random(400), random(400), size); 
  }
}

// amimation_2 function
function animation_2(size){
  for (let i = 0; i < 5; i++){
    fill(colors_array[floor(random(0, 10))]);
    rect(random(400), random(400), size, size); 
  }
}

// amimation_3 function
function animation_3(size){
  for (let i = 0; i < 5; i++){
    fill(colors_array[floor(random(0, 10))]);
    ellipse(random(400), random(400), random(size), random(size)); 
  }
}

// keyTyped function
function keyTyped() {
  if (key === '1'){
    animation_1(size);
    play_pop_sound1.play();
  } else if (key === '2'){
    animation_2(size);
    play_pop_sound2.play();
  } else if (key == '3'){
    animation_3(size);
    play_pop_sound3.play();
  }
}

// setup function
function setup() {
  createCanvas(400, 400);
  background(220);
}