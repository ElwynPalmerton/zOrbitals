
function repeater(actions, repeatInterval, iterations, duration) {
  let currentTime = Date.now() - start;
  // console.log("Timer: ", i, currentTime);
  let intervalTwo;
  let index = 0;

  let sequenceRepeater;

  function runSequence() {
    actions();

    sequenceRepeater = setTimeout(() => {
      runSequence();
    }, repeatInterval);
  }

  index++



  if (i < iterations) {
    runSequence();
  } else {
    console.log('clearing sequenceRepeater');
    clearInterval(sequenceRepeater);
  }

  setTimeout(() => {
    clearInterval(sequenceRepeater);
    return;
  }, duration);
}