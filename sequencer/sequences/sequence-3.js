function sequenceThree(duration) {

  console.log('sequenceThree')

  let backgroundInterval = setInterval(() => {
    run ? addAlpha() : null;
  }, 20);

  // stars.forEach(star => {
  //   star.color = {
  //     h: 44,
  //     s: 80,
  //     l: 0,
  //     a: 1,
  //   }
  // })

  setInterval(() => {
    clearInterval(backgroundInterval);
  }, duration);

  //log the background color every five seconds.


}