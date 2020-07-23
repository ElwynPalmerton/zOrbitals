//The Nature of Code, Chapter 2.

let attractor, mover;
let scale = 1;
let movers = []
let run = true;
let attractors = [];

let force;
let gravityForce;



let s = [{    //constants
  mass: 60,
  size: 30,
  initialSpeed: 15,
}];

let a = [{
  mass: 10,
  size: 50,
  x: 0.5,
  y: 0.5,
},
{
  mass: 50,
  size: 70,
  x: 0.8,
  y: 0.5,
},
{
  mass: -20,
  size: 70,
  x: 0.3,
  y: 0.2,
},
{
  mass: -20,
  size: 70,
  x: 0.8,
  y: 0.2,
}];


const c = {
  gravity: 100,
  qty: 30,
  maxSpeed: 15,
  minDistance: 50,
  maxDistance: 100,
  topSpeed: 15,
  sclDistance: 10,
};



function setup() {

  colorMode(HSB)

  let moverColor = color('hsla(160,  80%, 40%, 0.5)');
  let attractorColor = color('hsla(160,  80%, 40%, 0.5)');

  createCanvas(windowWidth, windowHeight);



  //attractor and mover both take (mass, size) as args.
  attractor = new Attractor(50, 50, 0.5, 0.5, attractorColor);

  for (let i = 0; i < c.qty; i++) {
    let mover = new Mover(s[0].mass, s[0].size, s[0].initialSpeed, moverColor);  //The mover taks mass, size, and inital speed as arguments.
    movers.push(mover);
  }
}

function mousePressed() {
  run = !run;
  if (run === true) {
    loop();
  }

}

function draw() {
  if (run === true) {
    background(258, 33, 21, 1);

    movers.forEach(mover => {
      gravityForce = attractor.attracts(mover);
      mover.applyForce(gravityForce);
      mover.update();
      mover.display();

    })

    attractor.display();

  } else {
    noLoop();
  }
}