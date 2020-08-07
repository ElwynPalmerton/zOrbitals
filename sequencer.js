
let sequenceMovers = [{    //constants
  mass: 60,
  size: 80,
  initialSpeed: 15,  //initial speed should maybe be a constant
  qty: 5,
},
{    //constants
  mass: 60,
  size: 80,
  initialSpeed: 15,   //initial speed should maybe be a constant.
  qty: 10,
},
{    //constants
  mass: 60,
  size: 80,
  initialSpeed: 15,   //initial speed should maybe be a constant.
  qty: 10,
}];

let sequenceAttractors = [{
  mass: 120,
  size: 70,
  x: 0.5,
  y: 0.5,
  gravity: 50,
  sclDistance: 3,
},
{
  mass: 30,
  size: 40,
  x: 0.8,
  y: 0.5,
  gravity: 50,
  sclDistance: 3,
},
{
  mass: 15,
  size: 50,
  x: 0.8,
  y: 0.5,
  gravity: 50,
  sclDistance: 3,
}];


moverCols = [
  {
    h: 200,
    s: 80,
    l: 70,
    a: 1
  },
  {
    h: 220,
    s: 80,
    l: 70,
    a: 1
  },
  {
    h: 260,
    s: 80,
    l: 70,
    a: 1
  }
]



//movers, attractor, colors, i




function sequencing() {
  i = i % sequenceMovers.length;
  let intervalTwo = setTimeout(() => {
    createConstellation(sequenceMovers, sequenceAttractors, moverCols, i);
    i++;
    if (i < sequenceMovers.length) {
      sequencing();
    }
  }, 3000);
}

