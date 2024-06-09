// Citations (MLA Format):

// 1) HIP HOP HISTORY: FROM THE STREETS TO THE MAINSTREAM. Icon Collective, 2019, https://iconcollective.edu/hip-hop-history/. Accessed 1 Mar. 2022.

// 2) Garsmeur, Alain L. "A Photograph of a Block at Harlem in NY in 1978." Found, Mr Porter, 2 March 2022, https://www.mrporter.com/en-ae/journal/lifestyle/how-the-block-party-invented-hip-hop-665720.

// 3) Conzo, Joe Jr. "DJ Tony Tone and DJ Kool Herc at the T-Connection, in 1979.". Found, Icon Collective, 2 March 2022. https://iconcollective.edu/hip-hop-history/.

// 4) "Roland TR-808 Drum Machine Kit". Found, Icon Collective, 2 March 2022. https://iconcollective.edu/hip-hop-history/.

// 5) Boyd, Raymond. "Ice Cube, Eazy-E, MC Ren. DJ Yella (front), and Dr. Dre, rapper Laylaw from Above The Law and rapper The D.O.C. (rear) poses for photos before their performances during N.W.A.'s 'Straight Outta Compton' tour at Kemper Arena in Kansas City, Missouri in June 1989." Found, Rolling Stone, 3 March 2022. https://www.rollingstone.com/feature/n-w-as-straight-outta-compton-12-things-you-didnt-know-707207/.

// 6) Roberts, Ebet. "Run-DMC (Jam Master Jay, Mr Joseph Simmons and Mr Darryl “DMC” McDaniels) in Hollis Queens, New York, 1986." Found, Mr Porter, 3 March 2022. https://www.mrporter.com/en-us/journal/lifestyle/how-run-dmc-earned-their-adidas-stripes-826882

// 7) Newbury, Jeffrey. "AN IMMERSIVE 2PAC MUSEUM EXPERIENCE IS LAUNCHING IN 2022". Found, DJMag, 3 March 2022. https://djmag.com/sites/default/files/styles/lead_parallax_image__1920x1080_/public/article/image/EO_000213780010_Jeffery%20Newbury.jpg?itok=HGppVx-p.

// 8) Oriol, Estevan. Snoop Dogg Biography. Found, Biography, 3 March 2022. https://www.biography.com/.image/t_share/MTQ3NjM5ODIyNjU0MTIxMDM0/snoop_dogg_photo_by_estevan_oriol_archive_photos_getty_455616412.jpg.

// 9) Charriau, Dominique. Kayne West Biography. Found, Biography, 3 March 2022. https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg.

// 10) Shotwell, Richard. "Rapper Kid Cudi". Found, The Washington Post, 3 March 2022. https://img.washingtonpost.com/rf/image_1484w/WashingtonPost/Content/Blogs/therootdc/Images/World_Premiere_of_A_Haunted_House_064e4-681.jpg?uuid=V7vvqmCzEeKZQG_EiPP-zQ.

// 11) FL Studio Logo. Found, Image-Line, 4 March 2022. https://www.image-line.com/wp-content/themes/intracto/build/images/fl-fruit-logo.png.

// 12) Juice WRLD Concert. Found, Wikipedia, 10 March 2022. https://upload.wikimedia.org/wikipedia/commons/3/35/Juice_WRLD_-_Les_Ardentes_2019_%28cropped%29.jpg.

// 13) Perez, Luis Panch. Tyler the Creator CALL ME IF YOU GET LOST album cover picture. Found, Magnetic Magazine, 10 March 2022. https://www.magneticmag.com/.image/t_share/MTgxODAxOTE4MTY5OTQ5MzE1/tyler-the-creator-by-luis-panch-perez.jpg (not cited yet)

// 14) Spotify Logo. Found, Wikimedia Commons, 12 March 2022. https://yt3.ggpht.com/ytc/AKedOLQSNdaJynuARrtIOqjYHqBg0xQwebaRtYxl_sm_iQ=s900-c-k-c0x00ffffff-no-rj

// 15) "FL Studio Start Sound (Startsnd)." Youtube, uploaded by Veement Produçoes, 9 June 2015, https://www.youtube.com/watch?v=InzXXH4tK3g.

// 16) Clean 808 Bass. Sample Focus. https://samplefocus.com/samples/clean-808-bass-a. Accessed 10 Mar. 2022.

let img; // hip hop artist group image
let img2; // hip hop instruments image
let play_808_sound; // '808 sample' sound file
// preload function
function preload(){
  img = loadImage('hip-hop.jpeg');
  img2 = loadImage('instruments-hip-hop.jpg');
  play_808_sound = loadSound('808.wav');
}

// setup function
function setup() {
  createCanvas(400, 500);
}

// mouseClicked function
function mouseClicked(){
  if ((mouseX > 200 && mouseX < 350) && (mouseY > 230 && mouseY < 380)){
    play_808_sound.play();
  }
}

// draw function
function draw() {
  background(255);
  image(img, 0, 50, 150, 150);
  image(img2, 200, 230, 150, 150);
}