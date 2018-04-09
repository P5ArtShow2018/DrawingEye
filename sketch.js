//preloading assets
function preload () {
  eye = loadImage ('assets/eye.jpg');
  brush = loadImage ('assets/brush.png');
}

function setup() {
  createCanvas (628,363);
  noStroke ();
  background (eye);
  imageMode(CENTER);
  cursor('assets/brush.png', mouseX, mouseY);
  brush.resize(100,100);
}

function draw() { 
 // image(brush,mouseX,mouseY);
  
}
function mouseDragged(){
  fill (255,216,242,10);
  ellipse (mouseX, mouseY, 20);
  
}

function keyPressed () {
  if (keyCode == 67) {
    image(eye,width / 2, height / 2);
  }
  if(keyCode == 32) {
    fill (0);
    ellipse (mouseX,mouseY,30,1);
  }
}

