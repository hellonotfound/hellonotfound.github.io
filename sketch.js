function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  orange = color(255, 145, 0);
  
  vid = createVideo("visual_.mp4");
  vid.size(displayHeight*2,displayHeight*1.1);
  vid.volume(0);
  vid.loop();
  vid.hide();
}

function preload() {
  font = loadFont('BebasNeue-Regular.otf');
}

function draw() { 
  
  if(checkCursor()){
    let img = vid.get();
    image(img, 0, 0);
  }else{
    background(0);
  }
  
  textFont(font);
  stroke(orange);
  fill(orange);
  textStyle(NORMAL);
  textSize(50);
  text("HELLONOTFOUND", width/2, height/2);
  
  textFont('Helvetica');
  noStroke();
  textStyle(ITALIC);
  fill(255, 196, 0);
  textSize(13);
  text("coming soon...", width/2, height-50);
}

function checkCursor(){
  if(mouseX > width/2-150 && mouseX < width/2+150){
    if(mouseY > height/2-30 && mouseY < height/2+30){
      return true;
    }
  }
}

