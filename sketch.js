console.log('new version 12.16')
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

let zSystem, backdrop, shootingStarSystem, darkStarSystem, bgColor;

// let darkStars = [];
let speed = 10;

<<<<<<< HEAD

let bgc = {
  h: 250,
  s: 30,
  l: 11,
  a: 1,
};

let lightnessIncreasing = true;

let saturationIncreasing = true;

=======
>>>>>>> testSequencer
incrementingScl = true;

function mousePressed() {
  run = !run;
  run ? loop() : noLoop();
}


function setup() {
  angleMode(RADIANS);
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);

  zSystem = new ConstellationSystem();               //A system of zOrbital .
  backdrop = new Starfield(200);                  //The glimmering backdrop.
  shootingStarSystem = new ShootingStarField(200);  //The zooming star field.
  darkStarSystem = new DarkStarField(30);           //The dark stars
  bgColor = new BackgroundColor();    //An object which contains methods for adjusting the bgc

  sequencer(masterScore);
  console.log('new version 12.16')
}
// setInterval(() => {
//   run ? console.log("bg in sketch: ", "h: ", bgColor.h, "s: ", bgColor.s, "l: ", bgColor.l, "a:", bgColor.a) : null;
// }, 1000)

function draw() {

  translate(width / 2, height / 2);
  background(bgColor.h, bgColor.s, bgColor.l, bgColor.a);

  backdrop.update();  //Starfield - the backdrop
  backdrop.display();

  zSystem.update();      //zOrbitals
  zSystem.display();

  shootingStarSystem.update();    //shooting stars
  shootingStarSystem.display();

  darkStarSystem.update();        //Dark stars
  darkStarSystem.display();

}
//End of draw()