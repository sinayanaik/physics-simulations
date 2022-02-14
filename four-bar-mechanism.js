let fourBar = new p5((sketch) => {
  let vecA, vecB, vecC, vecD;
  let apoints = [];
  let bpoints = [];
  let cpoints = [];
  let dpoints = [];

  let rotateRate = 105;
  sketch.setup = () => {
    let screen2 = sketch.createCanvas(800, 800);
    screen2.parent("4-bar");
    vecA = sketch.createVector(-200, -100);
    vecB = sketch.createVector(-100, 100);
    vecC = sketch.createVector(100, 100);
    vecD = sketch.createVector(100, -100);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.stroke(255, 153, 51);
    sketch.strokeWeight(2);
    sketch.line(0, sketch.height / 2, sketch.width, sketch.height / 2);
    sketch.line(sketch.width / 2, 0, sketch.width / 2, sketch.height);
    sketch.stroke(255, 255, 0);
    sketch.strokeWeight(1);
    sketch.line(
      sketch.width / 2,
      sketch.height / 2,
      sketch.width,
      sketch.height / 2
    );
    sketch.line(
      sketch.width / 2,
      sketch.height / 2,
      sketch.width / 2,
      sketch.height
    );
    sketch.line(sketch.width / 2, sketch.height / 2, 0, sketch.height / 2);
    sketch.line(sketch.width / 2, sketch.height / 2, sketch.width / 2, 0);

    sketch.angleMode(sketch.DEGREES);
    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.fill(255);
    //create vectors at the end (-10,0),(10,0),(0,-10),(0,10)

    vecA.rotate(sketch.radians(rotateRate));
    // vecB.rotate(sketch.radians(rotateRate));
    // vecC.rotate(sketch.radians(rotateRate));
    vecD.rotate(sketch.radians(rotateRate));

    //joint the vectors line
    //increase the stroke weight to make the line more visible
    sketch.strokeWeight(2);
    sketch.stroke(255);
    sketch.line(vecA.x, vecA.y, vecB.x, vecB.y);
    //stroke pink
    sketch.stroke(255, 0, 255);
    sketch.line(vecC.x, vecC.y, vecD.x, vecD.y);
    //stroke blue light
    sketch.stroke(0, 255, 255);
    sketch.line(vecA.x, vecA.y, vecD.x, vecD.y);
    //stroke light green
    sketch.stroke(0, 255, 0);
    sketch.line(vecB.x, vecB.y, vecC.x, vecC.y);

    apoints.push(vecA);
    bpoints.push(vecB);
    cpoints.push(vecC);
    dpoints.push(vecD);

    sketch.stroke(255, 153, 51);
    for (let i = 0; i < apoints.length; i++) {
      sketch.circle(apoints[i].x, apoints[i].y, 5);
      sketch.circle(bpoints[i].x, bpoints[i].y, 5);
      sketch.circle(cpoints[i].x, cpoints[i].y, 5);
      sketch.circle(dpoints[i].x, dpoints[i].y, 5);
    }
  };


});
