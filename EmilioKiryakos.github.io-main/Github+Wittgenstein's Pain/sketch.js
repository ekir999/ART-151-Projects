
let source_text = `Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own was man. Men received far his dashwood subjects new. My sufficient surrounded an companions dispatched in on. Connection too unaffected expression led son possession. New smiling friends and her another. Leaf she does none love high yet. Snug love will up bore as be. Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.`;
let search_word = 'Our';
let replace_word = "summer";
let altered_text;

function setup() {
  createCanvas(400, 400);
  altered_text = source_text.replaceAll(search_word, replace_word);
}

function draw() {
  background(220);
  textFont('Baskerville')
  textSize(20)
  let show_text;
  if(mouseIsPressed){
    show_text = altered_text;          
  } else{
    show_text = source_text;
  }
  text(show_text, 10, 10, 400, width*0.9)
}