
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
  bgColor = new backgroundColor();

  sequencer(masterScore);
}
setInterval(() => {
  run ? console.log("bg in sketch: ", "h: ", bgColor.h, "s: ", bgColor.s, "l: ", bgColor.l, "a:", bgColor.a) : null;
}, 1000)

function draw() {



  translate(width / 2, height / 2);
  background(bgColor.h, bgColor.s, bgColor.l, bgColor.a);


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