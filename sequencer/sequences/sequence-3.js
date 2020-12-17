function sequenceThree(duration) {

  let scoreThree = [
    {
      function: () => console.log("Sequence Three - Test One"),
      time: 1000,
    },
    {
      function: () => console.log("Sequence Four - Test Two"),
      time: 1000,
    },
  ];

  console.log('sequenceThree')


  sequencer(scoreThree);


  // function getIncrementForTargetValue(targetValue, currentValue, timeInMS) {
  //   const timeInSeconds = timeInMS / 1000;
  //   const increment = (targetValue - currentValue) / (60 * timeInSeconds);  //Or current plus?
  //   console.log(increment);
  //   return increment;
  // }


  // function removeAlpha() {
  //   const increment = getIncrementForTargetValue(0.5, bgc.a, 3000);

  //   let backgroundInterval = setInterval(() => {
  //     console.log(bgc.a);
  //     run ? changeAlpha(increment) : null;
  //     if (bgc.a <= 0) {
  //       console.log('cleared')
  //       clearInterval(backgroundInterval);
  //     }

  //   }, 17);
  // }

  // function addAlpha() {
  //   const increment = getIncrementForTargetValue(1, bgc.a, 3000);

  //   let backgroundInterval = setInterval(() => {
  //     console.log(bgc.a);
  //     run ? changeAlpha(increment) : null;
  //     if (bgc.a <= 0) {
  //       console.log('cleared')
  //       clearInterval(backgroundInterval);
  //     }

  //   }, 17);

  // }




  // setInterval(() => {
  //   clearInterval(backgroundInterval);
  // }, duration);

  //log the background color every five seconds.
}