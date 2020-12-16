class Constellation {

  constructor() {

    this.attractors;
    this.constellation = [];

    let yellowConstellationBuilder = new createConstellation(0.4, 15, 0.2);
    let blueConstellationBuilder = new createConstellation(0.6, 30, 0.2);

    let randomType = flip("yellow", "blue");

    if (i > sequenceAttractors.length - 1) {
      i = 0;
      console.log('Resetting attractors array');
    }

    let newColor = createRandomColor();

    if (randomType === "blue") {
      // this.constellation = blueConstellationBuilder.build(newSequenceMovers, newColor);
      this.constellation = blueConstellationBuilder.build();
      this.attractor = blueConstellationBuilder.addAttractor(sequenceAttractors[i], newColor);
    } else {
      this.constellation = yellowConstellationBuilder.build();
      this.attractor = blueConstellationBuilder.addAttractor(sequenceAttractors[i], newColor);
    }
  }


  update() {
    this.constellation.forEach(mover => {
      const gravityForce = this.attractor.attracts(mover);
      mover.applyForce(gravityForce);
      mover.update();

    })
  }

  display() {
    this.constellation.forEach(mover => {
      mover.display();
    })
  }
}



//Called from sequenceOne.

class createConstellation {
  //Create attractor.
  constructor(massRange, colorRange, ratio) {
    //The color passed into this is created in createRandomColor
    //...and then modifyColorWithinRange modifies it further.
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

  addAttractor(a, moverCol) {
    return new Attractor(a.mass, a.size, a.x, a.y, moverCol, a.gravity);
  }


  createMovers() {



  }

  build() {
    let tempMovers = [];


    let randomType = flip("yellow", "blue");
    let moverCol = createRandomColor(randomType);


    const moverQty = Math.floor(random(1, 15));

    //Create all the movers for that attractor.
    for (let j = 0; j < moverQty; j++) {
      //mass, size, inital speed, and color.

      let newMover = createRandomMover();
      let variation = random(this.massMin, this.massMax);    //0.8 and 1.2
      newMover.mass *= variation;
      newMover.size *= variation;

      let newMoverColor = this.modifyColorWithinRange(moverCol);

      let coin = random(1) < this.blinkToFadeMoverRatio;
      let mover;

      let newObject = Object.assign({}, newMover);
      if (coin) {
        mover = new BlinkMover(newObject.mass, newObject.size, c.initialSpeed, newMoverColor);
      } else {
        mover = new FadeMover(newObject.mass, newObject.size, c.initialSpeed, newMoverColor);
      }
      tempMovers.push(mover);

    }
    return tempMovers;
  }
}



function createRandomMover() {
  //Creates a mover with a random mass, size, and qty within the given ranges below.
  const randomMover = {
    mass: 0,
    size: 0,
  }

  randomMover.mass = Math.floor(random(10, 40));
  randomMover.size = Math.floor(random(100, 200));

  return randomMover;
}


function createRandomColor(type) {
  //Creates a random color for "yellow" or "blue" color schemes.
  const randomColor = {
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
