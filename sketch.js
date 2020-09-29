var scAngle, hrAngle, mnAngle;
var hr, mn, sc;



function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
  hr = hour();
 mn = minute();
 sc = second();
  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
//seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minute hand
  push();
  rotate(mnAngle);
  stroke(55, 144, 204);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //hour hand
  push();
  rotate(hrAngle);
  stroke(55, 204, 105);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

stroke(157, 55, 204)
strokeWeight(10);
point(0,0);

stroke(204, 112, 55)
noFill();
strokeWeight(10);
arc(0,0,300,300,0,scAngle);

stroke(204, 192, 55)
noFill();
strokeWeight(10);
arc(0,0,280,280,0,mnAngle);

stroke(212, 42, 127)
noFill();
strokeWeight(10);
arc(0,0,260,260,0,hrAngle);
  drawSprites();
}
 
function map(){
  
}