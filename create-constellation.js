//This can be created as a Class.
//The variation range amounts can be defined in the constructor.
//This instance can get assigned to a variable like createYellowConstellation
//... and then this can be called with all the variables needed to create the constellation.
//
//Also, what do I do about the Attractor and do I need that in here...?
//... Just use one attractor, or...? (Maybe best to preserve teh option.)
//
//Then I can also create an extended class which varies the saturation
//in coordination with the size.
//
//And create version of this function which take fewer functions and are
//therefore easier to call and do specific things by name (100 bright red movers!)



function createConstellation(s, a, moverCol, type) {
  //Create attractor.
  attractor = new Attractor(a.mass, a.size, a.x, a.y, moverCol, a.gravity);
  attractors.push(attractor);

  //Create all the movers for that attractor.
  for (let j = 0; j < s.qty; j++) {
    //mass, size, inital speed, and color.
    let moverColor = Object.assign({}, moverCol);

    if (type === "yellow") {
      let variation = random(0.8, 1.2);
      s.mass = s.mass * variation;
      s.size = s.size * variation;

      let colorVariation = Math.floor(random(0, 15));
      moverColor.h = moverColor.h + colorVariation;
      moverColor.l = moverColor.l;

    } else if (type === "blue") {
      let variation = random(0.8, 1.2);
      s.mass = s.mass * variation;
      s.size = s.size * variation;

      let colorVariation = Math.floor(random(-30, 30));
      moverColor.h = moverColor.h + colorVariation;
      moverColor.l = moverColor.l + 20;
      //moverColor.a = moverColor.a + colorVariation / 10;
    }

    let coin = random(1) < 0.3;
    let mover;

    if (coin) {
      mover = new BlinkMover(s.mass, s.size, c.initialSpeed, moverColor);
    } else {
      mover = new FadeMover(s.mass, s.size, c.initialSpeed, moverColor);
    }
    tempMovers.push(mover);

  }
  moverSet.push(tempMovers);

  tempMovers = [];
}