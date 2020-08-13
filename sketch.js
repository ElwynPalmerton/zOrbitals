//The Nature of Code, Chapter 2.
//Make more layers, scale the dots 

let attractor, mover;
let scale = 2;
let i = 0;

let tempMovers = [];
let moverSet = []

let run = true;
let attractors = [];

// let force; ---Not being used.
let gravityForce; //This is used in draw to pass the force to movers.
const scl = 0.1;


let s = [{    //constants
  mass: 60,
  size: 40,
  initialSpeed: 15,  //initial speed should maybe be a constant
  qty: 5,
},
{    //constants
  mass: 60,
  size: 40,
  initialSpeed: 15,   //initial speed should maybe be a constant.
  qty: 10,
},
{    //constants
  mass: 60,
  size: 40,
  initialSpeed: 15,   //initial speed should maybe be a constant.
  qty: 10,
}];

let a = [{
  mass: 120,
  size: 70,
  x: 0.5,
  y: 0.5,
  gravity: 50,
},
{
  mass: 100,
  size: 40,
  x: 0.8,
  y: 0.5,
  gravity: 50,
},
{
  mass: 80,
  size: 50,
  x: 0.8,
  y: 0.5,
  gravity: 50,
}];



const c = {
  //These should go in the attractor object.
  gravity: 50,
  sclDistance: 3,
  //These do not need to go in the attractor object.
  initialSpeed: 15,
  maxSpeed: 5,
  minDistance: 50,
  maxDistance: 100,
  topSpeed: 15,
};

function mousePressed() {
  run = !run;
  if (run === true) {
    loop();
  }
}

function createConstellation(s, a, moverCol, type) {
  //Create attractor.
  attractor = new Attractor(a.mass, a.size, a.x, a.y, moverCols[0], a.gravity);
  attractors.push(attractor);

  //Create all the movers for that attractor.
  for (let j = 0; j < s.qty; j++) {
    //mass, size, inital speed, and color.
    let moverColor = Object.assign({}, moverCol);

    if (type === "size-variation") {
      let variation = random(0.8, 1.2);
      s.mass = s.mass * variation;
      s.size = s.size * variation;
    } else if (type === "size-color-variation") {
      let variation = random(0.8, 1.2);
      s.mass = s.mass * variation;
      s.size = s.size * variation;

      let colorVariation = Math.floor(random(-20, 20));
      moverColor.h = moverColor.h + colorVariation;
      moverColor.l = moverColor.l + colorVariation / 2;

    }

    let coin = random(1) < 0.2;

    if (coin) {
      let mover = new BlinkMover(s.mass, s.size, c.initialSpeed, moverColor);
      tempMovers.push(mover);
    } else {
      let mover = new FadeMover(s.mass, s.size, c.initialSpeed, moverColor);
      tempMovers.push(mover);
    }

  }
  moverSet.push(tempMovers);

  tempMovers = [];
}

function setup() {

  colorMode(HSB)

  createCanvas(windowWidth, windowHeight);
  //background(258, 33, 21, 1);

  for (let i = 0; i < 0; i++) {
    createConstellation(s[i], a[i], moverCols[i], i, "normal");
  }

  sequencing();
}




function draw() {
  translate(width / 2, height / 2);
  if (run === true) {
    background(258, 33, 21, 1);

    for (let i = 0; i < attractors.length; i++) {
      moverSet[i].forEach(mover => {
        gravityForce = attractors[i].attracts(mover);
        mover.applyForce(gravityForce);
        mover.update();
        mover.display();
      })
      attractors[i].display();
    }

  } else {
    noLoop();
  }
}