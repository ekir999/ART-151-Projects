// Citations in MLA Format (also applies to all other links, assets and files in the project):

// 1) https://iconcollective.edu/hip-hop-history/ (not cited yet)
// 2) https://cache.mrporter.com/content/images/cms/ycm/resource/blob/665736/561136ae63223663e0d1375fe0aa22db/824efcc4-599d-4ee4-bdf2-850321231af0-data.jpg/w400_q80.jpg (not cited yet)
// 3) https://iconcollective.com/wp-content/uploads/DJ-Kool-Herc-and-Coke-La-Rock-652x367.jpg (not cited yet)
// 4) https://iconcollective.com/wp-content/uploads/Roland-TR-808-652x381.jpg (not cited yet)
// 5) https://www.rollingstone.com/wp-content/uploads/2018/08/NWA-10-things-you-didnt-know.jpg?resize=1800,1200&w=1200 (not cited yet)
// 6) https://cache.mrporter.com/content/images/cms/ycm/resource/blob/826888/29958b394e2d4463534f722de8ba97dc/bd1128a2-b348-488c-8d05-dd1d0ffd6006-data.jpg/w1400_q80.jpg (not cited yet)
// 7) 
// 8) 

let img; // hip hop artist group image
let img2; // hip hop instruments image
// preload function
function preload(){
  img = loadImage('hip-hop.jpeg');
  img2 = loadImage('instruments-hip-hop.jpg');
}

// setup function
function setup() {
  createCanvas(400, 500);
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 150, 150);
}