

defaultAttractor = {
  mass: 20,
  size: 70,
  x: 0,
  y: 0,
  gravity: 100,
};

function createRandomColor(type) {
  console.log(type);
  let randomColor = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  if (type === "yellow") {
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

  randomMovers.mass = Math.floor(random(10, 40));
  randomMovers.size = Math.floor(random(100, 200));
  randomMovers.qty = Math.floor(random(1, 15));
  return randomMovers;

}

function sequencing() {


  i += 1;

  let coin = random() < 0.2;
  let newColor;
  if (coin) {
    randomType = "yellow";
  } else {
    randomType = "blue";
  };


  newColor = createRandomColor(randomType);


  let newSequenceMovers = createRandomMovers();
  //let newRandomMover = createRandomMovers(scale);

  if (i < 9) {
    createConstellation(newSequenceMovers, defaultAttractor, newColor, randomType);
  } else {
    createConstellation(newSequenceMovers, defaultAttractor, newColor, randomType);
    moverSet.splice(0, 1);
  }

  let intervalTwo = setTimeout(() => {
    sequencing();
  }, 3000);
}

