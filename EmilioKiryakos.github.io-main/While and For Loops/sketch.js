// sketch function
function sketch(){
  for (var i = 0; i < 360; i++){
    ellipse(random(0,400), random(0,400), random(0,20), random(0,20));
  }
}

// setup function
function setup() {
  createCanvas(400, 400);
  background(220);
}

// draw function
function draw() {
  sketch();
}