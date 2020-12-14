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
let removeMoverSet = false;

let sequence = '';

const c = {
  //These should go in the attractor object.
  gravity: 50,
  sclDistance: 3,        ///??????
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



let stars = [];
let shootingStars = [];
let speed = 10;

function setup() {
  angleMode(RADIANS);

  for (let i = 0; i < 200; i++) {
    let star = new Blinker();
    stars.push(star);
  }

  for (let i = 0; i < 30; i++) {
    let newStar = new DarkStar();
    shootingStars.push(newStar);
  }

  for (let i = 0; i < 40; i++) {
    let newStar = new ShootingStar();
    shootingStars.push(newStar);
  }

  colorMode(HSB)

  createCanvas(windowWidth, windowHeight);
  //background(258, 33, 21, 1);

  // for (let i = 0; i < 0; i++) {
  //   createConstellation(s[i], a[i], moverCols[i], i, "normal");
  // }

  // sequencing();
  sequencer();
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


// let bg;

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

    for (let i = 0; i < moverSet.length; i++) {
      moverSet[i].forEach(mover => {
        gravityForce = attractors[i].attracts(mover);
        mover.applyForce(gravityForce);
        mover.update();
        mover.display();
      })
      //attractors[i].display();
    }
    stars.forEach(star => {
      star.update();
      star.display();
    });

    shootingStars.forEach(star => {
      star.update();
      star.display();
    })

  } else {
    noLoop();
  }
}