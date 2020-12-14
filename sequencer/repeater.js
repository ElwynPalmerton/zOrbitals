
function reqeatActionsAndStop(actions, repeatInterval, iterations) {
  let currentTime = Date.now() - start;
  // console.log("Timer: ", i, currentTime);
  let intervalTwo;
  let i = 0;

  let sequenceRepeater;

  function runSequence() {
    actions();
    i++

    sequenceRepeater = setTimeout(() => {
      runSequence();
    }, repeatInterval);


  }

  if (i < 2) {
    runSequence();
  } else {
    console.log('clearing sequenceRepeater');
    clearInterval(sequenceRepeater);
  }
}