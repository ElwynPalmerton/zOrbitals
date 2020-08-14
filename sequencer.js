
let sequenceMovers = [
  //Dark layer
  {
    mass: 80,
    size: 150,
    qty: 15,
  },
  {
    mass: 80,
    size: 200,
    qty: 15,
  },
  {
    mass: 80,
    size: 150,
    qty: 15,
  },
  //Blue layer
  {
    mass: 50,
    size: 180,
    qty: 15,
  },
  {
    mass: 25,
    size: 180,
    qty: 12,
  },
  {
    mass: 15,
    size: 200,
    qty: 8,
  },
  //Red one
  {
    mass: 40,
    size: 120,
    qty: 4,
  },
  //Yellow pair
  {
    mass: 40,
    size: 150,
    qty: 7,
  },
  {
    mass: 40,
    size: 150,
    qty: 7,
  },
];

let sequenceAttractors = [
  //background
  {
    mass: 50,
    size: 70,
    x: 0,
    y: 0,
    gravity: 60,
  },
  {
    mass: 50,
    size: 70,
    x: 0.25,
    y: 0.25,
    gravity: 60,
  },
  {
    mass: 50,
    size: 70,
    x: -0.25,
    y: -0.25,
    gravity: 60,
  },
  {
    mass: 50,
    size: 70,
    x: 0.25,
    y: -0.25,
    gravity: 30,
  },
  //blue layer
  {
    mass: 20,
    size: 140,
    x: -0.25,
    y: 0.25,
    gravity: 100,
  },
  {
    mass: 25,
    size: 140,
    x: 0.25,
    y: -0.25,
    gravity: 75,
  },
  {
    mass: 15,
    size: 140,
    x: 0.25,
    y: 0.75,
    gravity: 50,
  },
  //Red one
  {
    mass: 35,
    size: 140,
    x: 0.25,
    y: 0.75,
    gravity: 80,
  },
  //Yellow one
  {
    mass: 30,
    size: 120,
    x: 0.25,
    y: 0.75,
    gravity: 50,
  },

];





type = [
  "size-color-variation",
  "size-color-variation",
  "size-color-variation",
  "size-color-variation",
  "size-color-variation",
  "size-color-variation",

]

//movers, attractor, colors, i

// function createRandomMovers(scale) {

//   let mass = Math.floor(random(60, 100));

//   let randomMovers =
//   {
//     mass: mass,
//     size: Math.floor(random(60, 100)),
//     qty: Math.floor(random(1, 30)),
//   };
//   console.log(randomMovers);
//   return randomMovers;
// }


function createRandomColor(type) {
  console.log(type);
  let randomColor = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  if (type === "size-variation") {
    console.log("Yellow mover");
    randomColor.h = Math.floor(random(40, 75));
    randomColor.l = Math.floor(random(80, 100));
    randomColor.s = 95//Math.floor(random(75, 100));
    randomColor.a = 0.75 //random(0, 0.8);
  } else {
    randomColor.h = 240;
    randomColor.l = Math.floor(random(50, 100));
    randomColor.s = Math.floor(random(30, 100));
    randomColor.a = random(0, 0.8);
  }

  return randomColor;
}

function createRandomMovers() {
  const randomMovers = {
    mass: 0,
    size: 0,
    qty: 0,
  }

  randomMovers.mass = Math.floor(random(60, 80));
  randomMovers.size = Math.floor(random(100, 200));
  randomMovers.qty = Math.floor(random(1, 15));
  return randomMovers;

}

function sequencing() {


  i = i % sequenceMovers.length;

  let coin = random() < 0.2;
  let newColor;
  if (coin) {
    randomType = "size-variation";
  } else {
    randomType = "size-color-variation";
  }


  newColor = createRandomColor(randomType);


  let newSequenceMovers = createRandomMovers();
  //let newRandomMover = createRandomMovers(scale);


  createConstellation(newSequenceMovers, sequenceAttractors[i], newColor, randomType);


  let intervalTwo = setTimeout(() => {
    i++;
    if (i < sequenceMovers.length) {
      sequencing();
    }
  }, 3000);
}

