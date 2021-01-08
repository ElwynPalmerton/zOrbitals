
function repeater(actions, repeatInterval, duration) {

  actions();

  let sequenceRepeater = setInterval(() => {
    actions();
  }, repeatInterval);


  setTimeout(() => {
    console.log('clearing repeater');
    clearInterval(sequenceRepeater);
    // i = iterations;
    return;
  }, duration);
}


function switchRepeater(actionOne, actionTwo, timeOne, timeTwo, duration) {
  //Does actionOne for timeOne ms.
  //Then does actionTwo for timeTwo ms.
  //Repeats for the given total duration.
  //Clears the intervals and then does actionTwo a final time.
  //   ---actionTwo should be given as the conclusory state.

  let interval, timeout;
  interval = setInterval(() => {
    actionOne();
    timeout = setTimeout(() => {
      actionTwo();
    }, timeOne)
  }, timeOne + timeTwo)


  setTimeout(() => {
    console.log('Clearing switchRepeater');
    clearInterval(interval);
    clearTimeout(timeout);
    actionTwo();
  }, duration);
}