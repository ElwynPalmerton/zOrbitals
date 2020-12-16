//The Nature of Code, Chapter 2.
//Make more layers, scale the dots 


let i = 0;
let moverSet = []


let scale = 2;

// let tempMovers = [];

let run = true;

// let force; ---Not being used.
// let gravityForce; //This is used in draw to pass the force to movers.

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

let stars = [];
let shootingStars = [];
let darkStars = [];
let speed = 10;


let bgc = {
  h: 250,
  s: 30,
  l: 11,
  a: 1,
};


let lightnessIncreasing = true;
let saturationIncreasing = true;

incrementingScl = true;

function mousePressed() {
  run = !run;
  run ? loop() : noLoop();
}



function setup() {
  angleMode(RADIANS);
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);

  //The add functions are in utils/addObjects.
  addBlinkers(200);
  addDarkStars(30);
  addShootingStars(40);

  //Sequencer sequences all of the timed actions in this video.
  sequencer(masterScore);
}



function draw() {


  // console.log(bg);

  translate(width / 2, height / 2);
  background(bgc.h, bgc.s, bgc.l, bgc.a);
  // background(0, 0, 100, 1);

  for (let i = 0; i < moverSet.length; i++) {
    moverSet[i].update();
    moverSet[i].display();
  }

  stars.forEach(star => {
    star.update();
    star.display();
  });

  shootingStars.forEach(star => {
    star.update();
    star.display();
  })

  darkStars.forEach(star => {
    star.update();
    star.display();
  })
}
//End of draw()