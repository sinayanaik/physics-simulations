let fourBar = new p5((sketch) => {
  sketch.setup = () => {
    let screen2 = sketch.createCanvas(800, 800);
    screen2.parent("4-bar");
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.fill(255);
    sketch.rect(0, 0, 50, 50);
    sketch.triangle(0, 0, 50, 0, 25, 25);
  };
});
