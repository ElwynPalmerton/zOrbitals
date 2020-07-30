//The Nature of Code, Chapter 2.
//Make more layers, scale the dots 

let attractor, mover;
let scale = 1;
let movers1 = []
let movers2 = []
let run = true;
let attractors = [];

let force;
let gravityForce;
const scl = 0.5;


//Refactor the Attractor and mover objects into a separate function which is called from setup. 
//Put color values into that object.
//THe the requisite constants into each object in the Attractor object.
//Movers can be turned into an array of arrays. Or an array of objects - each with an array and some other values.
//
//Encapsulate the object creation and object updating loops into a function.
//This function should take an element from the array of Attractor objects.
//It should take all of the arguments which Mover and Attractor take, plus a qty.
//
//
//Encapsulate the hsla color values so that they can be saved in an array of four values. 
//
//How do I design the sequencing pattern? 
//Create a function which calls setTimeout. 
//Each time it calls the next entry in an array.
//The new values create a "target" and the program increments/decrements the existing value over the duration of the interval defined in the function call.
//Maybe this should be implement in a Hello World version first.





let s = [{    //constants
  mass: 60,
  size: 30,
  initialSpeed: 15,  //initial speed should maybe be a constant
},
{    //constants
  mass: 60,
  size: 30,
  initialSpeed: 15,   //initial speed should maybe be a constant.
}];

let a = [{
  mass: 100,
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
  //These should go in the attractor object.
  gravity: {
    a: 50,
    b: 100,
  },
  qty: 10,
  sclDistance: 1,  
  //These do not need to go in the attractor object.
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

  //Refactor each group into a loop.
  //Put the attractor in an array and create that in the same function.
  //Do the same in draw, below.
  //c.qty should reference a value on the attractor object instead.
  //movers1 and mover2 can be refactored into an array of arrays.
  //
  //Then build (ctrl+c) a sequencer like in bouncing-balls.
  //This is will take a mover and attractor preset and launch a new constellation.

  let j = 0;  //refactor this into a loop.
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