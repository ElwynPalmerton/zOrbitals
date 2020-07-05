//The Nature of Code, Chapter 2.

let attractor, mover;
let force;
let gravityForce;
const canvasSize = 1000;

function setup() {
  createCanvas(canvasSize, canvasSize);

  //attractor and mover both take (mass, size) as args.
  attractor = new Attractor(100, 100);
  mover = new Mover(100, 50);
}

function draw() {
  background(100);

  gravityForce = attractor.attracts(mover);
  mover.checkEdges();
  mover.applyForce(gravityForce);
  mover.update();


  mover.display();
  attractor.display();
}