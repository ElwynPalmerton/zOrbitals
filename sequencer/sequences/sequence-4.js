function sequenceFour(duration) {
  console.log("sequence four");


  const bgSpecs = {
    lightnessChangeRate: 0.011,
    saturationChangeRate: 0.09,
    hueChangeRate: 0.5,
    lightnessMax: 50,
    lightnessMin: 0,
    saturationMax: 50,
    saturationMin: 0
  }

  //Set the background color every 20 milliseconds
  let backgroundInterval = setInterval(() => {
    run ? bgColor.backgroundSequencer(bgSpecs) : null;
  }, 20);
  // }

  setTimeout(() => {
    clearInterval(backgroundInterval);
  }, duration)


}