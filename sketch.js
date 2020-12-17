
//???
let scl = 0.1;
let scale = 2;

let run = true;


const c = {
  //These should go in the attractor object???
  gravity: 50,
  sclDistance: 3,        ///??????
  //These do not need to go in the attractor object.
  initialSpeed: 15,
  maxSpeed: 5,
  minDistance: 50,
  maxDistance: 100,
  topSpeed: 15,
};

// let darkStars = [];
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

  system = new constellationSystem();
  starSystem = new starfield(200);
  shootingStarSystem = new ShootingStarField(200);
  darkStarSystem = new DarkStarField(30);

  sequencer(masterScore);
}


function draw() {

  translate(width / 2, height / 2);
  background(bgc.h, bgc.s, bgc.l, bgc.a);
  // background(0, 0, 100, 1);

  starSystem.update();
  starSystem.display();

  system.update();
  system.display();

  shootingStarSystem.update();
  shootingStarSystem.display();

  darkStarSystem.update();
  darkStarSystem.display();

}
//End of draw()