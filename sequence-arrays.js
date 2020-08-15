
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
    x: 0,
    y: 0,
    gravity: 60,
  },
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
    x: 0,
    y: 0,
    gravity: 30,
  },
  //blue layer
  {
    mass: 20,
    size: 140,
    x: 0,
    y: 0,
    gravity: 100,
  },
  {
    mass: 25,
    size: 140,
    x: 0,
    y: 0,
    gravity: 75,
  },
  {
    mass: 15,
    size: 140,
    x: 0,
    y: 0,
    gravity: 50,
  },
  //Red one
  {
    mass: 35,
    size: 140,
    x: 0,
    y: 0,
    gravity: 80,
  },
  //Yellow one
  {
    mass: 30,
    size: 120,
    x: 0,
    y: 0,
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

