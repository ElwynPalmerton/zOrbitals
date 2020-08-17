
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
      createConstellation(newSequenceMovers, defaultAttractor, newColor, randomType);
    } else {
      createConstellation(newSequenceMovers, defaultAttractor, newColor, randomType);
      moverSet.splice(0, 1);
    }

    i++
  }

  let repeatTime = 3000;
  reqeatActionsAndStop(sequenceOneActions, repeatTime, duration);
};
