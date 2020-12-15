
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