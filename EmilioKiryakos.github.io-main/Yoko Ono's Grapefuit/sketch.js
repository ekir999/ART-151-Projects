//declare variables for use throughout the program 
let source_text = 'This is a straight line... This line is a thousand miles long... This line is an inch long.....';
let search_word = 'a straight line';
let replace_word= 'not so straight';
 
let altered_text;
let backgroundColor;
let textColor;
function setup() {
  createCanvas(400, 400);
  //replace substitute word in string 
  altered_text = source_text.replaceAll(search_word, replace_word); 
}

function draw() {
  background(20,25,100);
  textFont ('Baskerville');
  textSize(20);
  
  if(mouseIsPressed){
    
    show_text = altered_text;
    backgroundColor = 'pink';
    textColor = 'orange';
  } else {
    show_text = source_text;
    backgroundColor = 'gray';
    textColor = 'black'
  }
  background(backgroundColor);
  fill(textColor);
  text(show_text, 10, 10, width*0.9);
}