//The Nature of Code, Chapter 2.

let attractor, mover;
let scale = 1;
let movers1 = []
let movers2 = []
let run = true;
let attractors = [];

let force;
let gravityForce;
const scl = 0.5;



let s = [{    //constants
  mass: 60,
  size: 30,
  initialSpeed: 15,
},
{    //constants
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
  size: 20,
  x: 0.8,
  y: 0.5,
}];


const c = {
  gravity: {
    a: 50,
    b: 100,
  },
  qty: 10,
  maxSpeed: 15,
  minDistance: 50,
  maxDistance: 100,
  topSpeed: 15,
  sclDistance: 1,
};

function mousePressed() {
  run = !run;
  if (run === true) {
    loop();
  }
}

function setup() {

  colorMode(HSB)



  createCanvas(windowWidth, windowHeight);
  //background(258, 33, 21, 1);
  let mover1Color = color('hsla(320,  80%, 40%, 0.5)');
  let mover2Color = color('hsla(160,  80%, 40%, 0.5)');
  let mover3Color = color('hsla(50,  80%, 40%, 0.5)');
  let attractorColor = color('hsla(160,  80%, 40%, 0.5)');


  //attractor and mover both take (mass, size) as args.
  attractor = new Attractor(50, 50, 0.5, 0.5, attractorColor, c.gravity.a);
  attractor2 = new Attractor(50, 50, 0.5, 0.5, attractorColor, c.gravity.b);


  let j = 0;
  for (let i = 0; i < c.qty; i++) {
    let mover = new Mover(s[j].mass, s[j].size, s[j].initialSpeed, mover1Color);  //The mover taks mass, size, and inital speed as arguments.
    movers1.push(mover);
  }
  j = 1;

  for (let i = 0; i < c.qty; i++) {
    let mover = new Mover(s[j].mass, s[j].size, s[j].initialSpeed, mover2Color);  //The mover taks mass, size, and inital speed as arguments.
    movers2.push(mover);
  }



}

function draw() {
  translate(width / 2, height / 2);
  if (run === true) {
    background(258, 33, 21, 1);

    movers1.forEach(mover => {
      gravityForce = attractor.attracts(mover);
      mover.applyForce(gravityForce);
      mover.update();
      mover.display();
    })

    movers2.forEach(mover => {
      gravityForce = attractor2.attracts(mover);
      mover.applyForce(gravityForce);
      mover.update();
      mover.display();

    })

    attractor.display();

  } else {
    noLoop();
  }
}