//Then I can also create an extended class which varies the saturation
//in coordination with the size.
//
//And create version of this function which take fewer arguments and are
//therefore easier to call and do specific things by name (100 bright red movers!)
//
//Change casing in the class defintion.


class createConstellation {
  //Create attractor.
  constructor(massRange, colorRange, ratio) {
    this.blinkToFadeMoverRatio = ratio;

    this.colorMin = -colorRange//-Math.floor(colorRange / 2);
    this.colorMax = colorRange//Math.floor(colorRange / 2);


    this.massMin = 0.8 //1 + Math.floor(massRange / 2);
    this.massMax = 1.2  // 1 - Math.floor(massRange / 2);

  }

  modifyColorWithinRange(color) {
    let moverColor = Object.assign({}, color);
    let colorVariation = Math.floor(random(this.colorMin, this.colorMax));   //0, 15 
    moverColor.h = moverColor.h + colorVariation;
    moverColor.l = moverColor.l;
    return moverColor;
  }

  build(s, a, moverCol) {


    attractor = new Attractor(a.mass, a.size, a.x, a.y, moverCol, a.gravity);
    attractors.push(attractor);

    //Create all the movers for that attractor.
    for (let j = 0; j < s.qty; j++) {
      //mass, size, inital speed, and color.

      let variation = random(this.massMin, this.massMax);    //0.8 and 1.2
      s.mass = s.mass * variation;
      s.size = s.size * variation;

      //The input for the yellow mover should be changed by +8

      let newMoverColor = this.modifyColorWithinRange(moverCol);

      let coin = random(1) < this.blinkToFadeMoverRatio;
      let mover;

      let newObject = Object.assign({}, s);
      if (coin) {
        mover = new BlinkMover(newObject.mass, newObject.size, c.initialSpeed, newMoverColor);
      } else {
        mover = new FadeMover(newObject.mass, newObject.size, c.initialSpeed, newMoverColor);
      }
      tempMovers.push(mover);

    }
    moverSet.push(tempMovers);

    tempMovers = [];
  }
}


function createRandomColor(type) {
  let randomColor = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  if (type === "yellow") {
    randomColor.h = Math.floor(random(50, 75));
    randomColor.l = Math.floor(random(80, 100));
    randomColor.s = 95//Math.floor(random(75, 100));
    randomColor.a = 0.75 //random(0, 0.8);
  } else if (type === "blue") {
    randomColor.h = 240;
    randomColor.l = Math.floor(random(70, 100));
    randomColor.s = Math.floor(random(50, 100));
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