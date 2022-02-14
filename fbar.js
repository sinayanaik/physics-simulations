//function setup with background color light blue
let vecA, vecB, vecC, vecD;
let Apoints = [];
let Dpoints = [];

let rotateRate = 2;
function setup() {
  createCanvas((windowWidth * 3) / 4, (windowHeight * 3) / 4);
  //background black
  background(0);
  vecA = createVector(-200, -100);
  vecB = createVector(-100, 100);
  vecC = createVector(100, 100);
  vecD = createVector(100, -100);
}
function draw() {
  background(0);
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  push();
  setLineDash([10, 10]);
  stroke(237, 74, 112);
  strokeWeight(1);
  line(-width / 2 + 10, 0, width / 2 - 10, 0);
  line(0, -height / 2 + 10, 0, height / 2 - 10);
  pop();

  //draw the lines
  stroke(255, 153, 51);
  strokeWeight(2);
  line(vecA.x, vecA.y, vecB.x, vecB.y);
  stroke(255, 0, 255);
  line(vecC.x, vecC.y, vecD.x, vecD.y);
  stroke(0, 255, 255);
  line(vecA.x, vecA.y, vecD.x, vecD.y);
  stroke(0, 255, 0);
  line(vecB.x, vecB.y, vecC.x, vecC.y);

  //mark the points
  stroke(255);
  strokeWeight(1);
  point(vecB.x, vecB.y);
  point(vecC.x, vecC.y);
  //write the names of the points
  //change textfille and textsize to make the text more visible
  textSize(18);
  textFont("Arial");
  fill(255);
  text("A", vecA.x, vecA.y);
  text("B", vecB.x, vecB.y);
  text("C", vecC.x, vecC.y);
  text("D", vecD.x, vecD.y);

  //rotate the points
  push();
  translate(vecB.x, vecB.y);
  vecA.rotate(rotateRate);
  point(vecA.x, vecA.y);
  pop();

  push();
  translate(vecC.x, vecC.y);
  vecD.rotate(rotateRate);
  point(vecD.x, vecD.y);
  pop();

  Apoints.push(vecA);
  Dpoints.push(vecD);

  for (let i = 0; i < Apoints.length; i++) {
    stroke(255, 153, 51);
    point(Apoints[i].x, Apoints[i].y);
    stroke(255, 0, 255);
    point(Dpoints[i].x, Dpoints[i].y);
  }
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
