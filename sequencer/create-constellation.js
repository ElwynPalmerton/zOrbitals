
// //Called from sequenceOne.

// class createConstellation {
//   //Create attractor.
//   constructor(massRange, colorRange, ratio) {
//     //The color passed into this is created in createRandomColor
//     //...and then modifyColorWithinRange modifies it further.
//     this.blinkToFadeMoverRatio = ratio;

//     this.colorMin = -colorRange//-Math.floor(colorRange / 2);
//     this.colorMax = colorRange//Math.floor(colorRange / 2);


//     this.massMin = 0.8 //1 + Math.floor(massRange / 2);
//     this.massMax = 1.2  // 1 - Math.floor(massRange / 2);

//   }

//   modifyColorWithinRange(color) {
//     let moverColor = Object.assign({}, color);
//     let colorVariation = Math.floor(random(this.colorMin, this.colorMax));   //0, 15 
//     moverColor.h = moverColor.h + colorVariation;
//     moverColor.l = moverColor.l;
//     return moverColor;
//   }

//   build(s, a, moverCol) {

//     tempMovers = [];
//     attractor = new Attractor(a.mass, a.size, a.x, a.y, moverCol, a.gravity);
//     attractors.push(attractor);

//     //Create all the movers for that attractor.
//     for (let j = 0; j < s.qty; j++) {
//       //mass, size, inital speed, and color.

//       let variation = random(this.massMin, this.massMax);    //0.8 and 1.2
//       s.mass = s.mass * variation;
//       s.size = s.size * variation;

//       //The input for the yellow mover should be changed by +8

//       let newMoverColor = this.modifyColorWithinRange(moverCol);

//       let coin = random(1) < this.blinkToFadeMoverRatio;
//       let mover;

//       let newObject = Object.assign({}, s);
//       if (coin) {
//         mover = new BlinkMover(newObject.mass, newObject.size, c.initialSpeed, newMoverColor);
//       } else {
//         mover = new FadeMover(newObject.mass, newObject.size, c.initialSpeed, newMoverColor);
//       }
//       tempMovers.push(mover);

//     }
//     return tempMovers;
//   }
// }


//Then I can also create an extended class which varies the saturation
//in coordination with the size.
//
//And create version of this function which take fewer arguments and are
//therefore easier to call and do specific things by name (100 bright red movers!)
//
//Change casing in the class defintion.