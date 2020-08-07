//The Nature of Code, Chapter 2.
//Make more layers, scale the dots 

let attractor, mover;
let scale = 1;
let i = 0;

let tempMovers = [];
let moverSet = []

let run = true;
let attractors = [];

// let force; ---Not being used.
let gravityForce; //This is used in draw to pass the force to movers.
const scl = 0.4;


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
},
{
  mass: 30,
  size: 40,
  x: 0.8,
  y: 0.5,
},
{
  mass: 15,
  size: 50,
  x: 0.8,
  y: 0.5,
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

function createConstellation(s, a, moverCols, i) {
  //Create attractor.
  attractor = new Attractor(a[i].mass, a[i].size, a[i].x, a[i].y, moverCols[0], c.gravity);
  attractors.push(attractor);

  //Create all the movers for that attractor.
  for (let j = 0; j < s[i].qty; j++) {
    //mass, size, inital speed, and color.
    let mover = new Mover(s[i].mass, s[i].size, c.initialSpeed, moverCols[i]);
    tempMovers.push(mover);
  }
  moverSet.push(tempMovers);

  console.log(moverSet);

  tempMovers = [];
}

function setup() {

  colorMode(HSB)

  createCanvas(windowWidth, windowHeight);
  //background(258, 33, 21, 1);

  for (let i = 0; i < s.length; i++) {
    createConstellation(s, a, moverCols, i);
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