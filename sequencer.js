
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
    x: 0.1,
    y: 0.1,
    gravity: 30,
  },
  {
    mass: 50,
    size: 70,
    x: 0.5,
    y: 0.5,
    gravity: 30,
  },
  {
    mass: 50,
    size: 70,
    x: 0.5,
    y: 0.5,
    gravity: 30,
  },
  {
    mass: 50,
    size: 70,
    x: 0.5,
    y: 0.5,
    gravity: 30,
  },
  //blue layer
  {
    mass: 20,
    size: 140,
    x: 0.25,
    y: 0.75,
    gravity: 100,
  },
  {
    mass: 25,
    size: 140,
    x: 0.25,
    y: 0.75,
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


moverCols = [
  //Dark layer
  {
    h: 280,
    s: 30,
    l: 80,
    a: 0.4
  },
  {
    h: 270,
    s: 30,
    l: 60,
    a: 0.2
  },
  {
    h: 260,
    s: 20,
    l: 60,
    a: 0.2
  },

  //Blue layer
  {
    h: 220,
    s: 80,
    l: 85,
    a: 0.7
  },
  {
    h: 220,
    s: 80,
    l: 85,
    a: 0.8
  },
  {
    h: 260,
    s: 80,
    l: 85,
    a: 0.6
  },
  //Red one
  {
    h: 305,
    s: 100,
    l: 100,
    a: .75
  },
  //Yellow Pair
  {
    h: 87,
    s: 90,
    l: 100,
    a: 0.75
  },
  {
    h: 146,
    s: 80,
    l: 90,
    a: 0.75
  },
  // {
  //   h: 300,
  //   s: 80,
  //   l: 70,
  //   a: 1
  // }
]

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


function createRandomColor() {
  let randomColor = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  randomColor.h = Math.floor(random(0, 360));
  randomColor.s = Math.floor(random(0, 100));
  randomColor.l = Math.floor(random(0, 100));
  randomColor.a = random(0, 1);
  return randomColor;
}

function sequencing() {


  i = i % sequenceMovers.length;


  let newColor = createRandomColor();
  //let newRandomMover = createRandomMovers(scale);


  createConstellation(sequenceMovers[i], sequenceAttractors[i], newColor, type[i]);


  let intervalTwo = setTimeout(() => {
    i++;
    if (i < sequenceMovers.length) {
      sequencing();
    }
  }, 3000);
}

