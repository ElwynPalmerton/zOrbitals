class Constellation {

  constructor(i) {

    this.index = i;
    this.attractors;
    this.constellation = [];

    // if (i > sequenceAttractors.length - 1) {
    //   i = 0;
    //   console.log('Resetting attractors array');
    // }


    //refactor createConstellation into a single function, not a class.
    //Do away with this.createConstellationsBuilder.
    //    ----The base color will get passed in anyway.
    //
    //Randomly generate the range values in the constellation builder.
    //Give it one argument for color
    //Factor out all of the color calculator because that can be used for any other 
    //objects potentially too.
    //modifyWithinRange needs to be called from inside here but it can be outside this scope.

    const constellationBuilder = this.createConstellationBuilder();
    this.constellation = constellationBuilder.build();

    this.attractor = constellationBuilder.addAttractor(sequenceAttractors[this.index], this.constellation[0].col);
  }

  createConstellationBuilder() {
    let randomType = flip("yellow", "blue");

    let yellowConstellationBuilder = new constellationBuilder(0.4, 15, 0.2);
    let blueConstellationBuilder = new constellationBuilder(0.6, 30, 0.2);

    if (randomType === "yellow") {
      return yellowConstellationBuilder;
    } else {
      return blueConstellationBuilder;
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


class constellationBuilder {

  //setRange
  //Create attractor.
  constructor(massRange, colorRange, ratio) {
    //The color passed into this is created in createRandomColor
    //...and then modifyColorWithinRange modifies it further.
    this.blinkToFadeMoverRatio = ratio;


    //These can be generated in modifyColorWithinRange
    this.colorMin = -colorRange//-Math.floor(colorRange / 2);
    this.colorMax = colorRange//Math.floor(colorRange / 2);

    //These can be generated within createRandomMover
    //and just used there. The variation can be created in there too instead of in
    //build.
    this.massMin = 0.8 //1 + Math.floor(massRange / 2);
    this.massMax = 1.2  // 1 - Math.floor(massRange / 2);
  }


  build() {
    let tempMovers = [];

    const moverQty = Math.floor(random(1, 15));

    //Create all the movers for that attractor.
    for (let j = 0; j < moverQty; j++) {
      //mass, size, inital speed, and color.

      let newMover = createRandomSizeAndMass();   //returns random size and mass
      let variation = random(this.massMin, this.massMax);    //0.8 and 1.2
      newMover.mass *= variation;
      newMover.size *= variation;

      const mover = this.createBlinkOrFadeMover(newMover.mass, newMover.size, c.initialSpeed);

      tempMovers.push(mover);
    }

    this.createMoverColors(tempMovers);
    return tempMovers;
  }

  createMoverColors(tempMovers) {
    let randomType = flip("yellow", "blue");
    let moverCol = createRandomColor(randomType);

    tempMovers.forEach(mover => {
      let newMoverColor = this.modifyColorWithinRange(moverCol);
      mover.setColor(newMoverColor);
    });
    return tempMovers;
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

  createBlinkOrFadeMover(mass, size, initialSpeed) {

    let coin = random(1) < this.blinkToFadeMoverRatio;

    let mover;
    // let newObject = Object.assign({}, newMover);
    if (coin) {
      mover = new BlinkMover(mass, size, initialSpeed, { h: 170, s: 100, l: 100, a: 1 });
    } else {
      mover = new FadeMover(mass, size, initialSpeed);
    }
    return mover;
  }

}

function createRandomSizeAndMass() {
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
