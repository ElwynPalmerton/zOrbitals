
function reqeatActionsAndStop(actions, repeatInterval, duration) {
  let currentTime = Date.now() - start;
  // console.log("Timer: ", i, currentTime);
  let intervalTwo;
  let i = 0;
  runSequence();

  function runSequence() {
    actions();

    sequenceRepeater = setTimeout(() => {
      runSequence();
    }, repeatInterval);
  }

  setTimeout(() => {
    console.log("Clearing");
    clearTimeout(sequenceRepeater);
  }, duration);
}

function sequenceOne(duration) {

  let yellowConstellationBuilder = new createConstellation(0.4, 15, 0.2); //args: massRange, colorRange
  let blueConstellationBuilder = new createConstellation(0.6, 30, 0.2);

  function sequenceOneActions(duraction) {

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

    if (i < 10) {
      console.log("Creating constellation");
      if (randomType === "blue") {
        blueConstellationBuilder.build(newSequenceMovers, sequenceAttractors[i], newColor);
      } else {
        yellowConstellationBuilder.build(newSequenceMovers, sequenceAttractors[i], newColor);
      }
    } else {
      newConstellationBuilder.build(newSequenceMovers, defaultAttractor, newColor, randomType);
      moverSet.splice(0, 1);
    }

    i++
  }

  let repeatTime = 3000;
  reqeatActionsAndStop(sequenceOneActions, repeatTime, duration);
};
