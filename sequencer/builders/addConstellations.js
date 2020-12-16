

// function addConstellations() {
//   const CONSTELLATIONS = 10;

//   let yellowConstellationBuilder = new createConstellation(0.4, 15, 0.2);
//   let blueConstellationBuilder = new createConstellation(0.6, 30, 0.2);

//   //... sequenceTwo gets called.
//   //Creates a set of yellow or blue constellations every three seconds.

//   let randomType = flip("yellow", "blue");

//   newColor = createRandomColor(randomType);

//   let newSequenceMovers = createRandomMovers();
//   //let newRandomMover = createRandomMovers(scale);

//   if (i < CONSTELLATIONS) {
//     console.log("Creating constellation");
//     if (randomType === "blue") {
//       blueConstellationBuilder.build(newSequenceMovers, sequenceAttractors[i], newColor);
//     } else {
//       yellowConstellationBuilder.build(newSequenceMovers, sequenceAttractors[i], newColor);
//     }
//   } else {

//     // //Where is newConstellation builder defined??????
//     // newConstellationBuilder.build(newSequenceMovers, defaultAttractor, newColor, randomType);
//     // moverSet.splice(0, 1);
//   }

//   i++
// }