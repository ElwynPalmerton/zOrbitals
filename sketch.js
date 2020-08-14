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
let scl = 0.1;


let s = [{    //constants
  mass: 60,
  size: 800,
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

      let colorVariation = Math.floor(random(-50, 50));
      moverColor.h = moverColor.h + colorVariation;
      moverColor.l = moverColor.l + 20;
      //moverColor.a = moverColor.a + colorVariation / 10;

    }

    let coin = random(1) < 0.6;
    let mover;

    if (coin) {
      mover = new BlinkMover(s.mass, s.size, c.initialSpeed, moverColor);
    } else {
      mover = new FadeMover(s.mass, s.size, c.initialSpeed, moverColor);
    }
    tempMovers.push(mover);

  }
  moverSet.push(tempMovers);

  tempMovers = [];
}

let stars = [];

function setup() {

  for (let i = 0; i < 200; i++) {
    let star = new blinker();
    stars.push(star);
  }

  colorMode(HSB)

  createCanvas(windowWidth, windowHeight);
  //background(258, 33, 21, 1);

  for (let i = 0; i < 0; i++) {
    createConstellation(s[i], a[i], moverCols[i], i, "normal");
  }

  sequencing();
  //backgroundSequencer();
}
let lightnessIncreasing = true;
let saturationIncreasing = true;

let bgc = {
  h: 250,
  s: 30,
  l: 11,
  a: 1,
};

function backgroundSequencer() {

  const bgChangeRate = 0.011;
  const saturationChangeRate = 0.017;
  const colorChangeRate = 0.5;

  const lightnessMax = 15;
  const lightnessMin = 0;

  const saturationMax = 20;
  const saturationMin = 0;


  //setTimer to increment background saturation and then decrement it.

  if (lightnessIncreasing === true) {
    bgc.l += bgChangeRate;
  } else {
    bgc.l -= bgChangeRate;;
  }

  if (saturationIncreasing === true) {
    bgc.s += saturationChangeRate;
  } else {
    bgc.s -= saturationChangeRate;
  }

  bgc.h += colorChangeRate;
  bgc.h = bgc.h % 360;



  if (bgc.l < lightnessMin) lightnessIncreasing = true;
  if (bgc.l > lightnessMax) lightnessIncreasing = false;

  if (bgc.s < saturationMin) saturationIncreasing = true;
  if (bgc.s > saturationMax) saturationIncreasing = false;

  return bgc;
}


incrementingScl = true;

function draw() {
  // if (incrementingScl === true) {
  //   scl += 0.001;
  // } else {
  //   scl -= 0.001;
  // }
  // console.log(scl);

  // if (scl > 0.8) {
  //   incrementingScl = false;
  // }
  // if (scl < 0.01) {
  //   incrementingScl = true;
  // }



  let bg = backgroundSequencer();
  translate(width / 2, height / 2);
  if (run === true) {
    background(bg.h, bg.s, bg.l, bg.a);

    for (let i = 0; i < attractors.length; i++) {
      moverSet[i].forEach(mover => {
        gravityForce = attractors[i].attracts(mover);
        mover.applyForce(gravityForce);
        mover.update();
        mover.display();
      })
      // attractors[i].display();
    }
    stars.forEach(star => {
      star.update();
      star.display();
    })

  } else {
    noLoop();
  }
}