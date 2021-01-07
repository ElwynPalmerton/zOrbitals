
function prelude(duration) {

  console.log("Part 1 - Prelude");

  //Background value is set.
  bgc = {
    h: 0,
    s: 0,
    l: 10,
    a: 1,
  }

  bgColor.setColor(bgc);

  //Background specs are set.
  const bgSpecs = {
    hueChangeRate: 0.5,
    saturationMax: 20,
    saturationMin: 0,
    lightnessChangeRate: 0.017,
    saturationChangeRate: 0.017,
    lightnessMax: 15,
    lightnessMin: 0,
  }

  //Set the background color every 20 milliseconds
  let backgroundInterval = setInterval(() => {
    run ? bgColor.backgroundSequencer(bgSpecs) : null;
  }, 20);
  // }

  setTimeout(() => {
    clearInterval(backgroundInterval);
  }, duration)

  //log the background color every five seconds.
  // setInterval(() => {
  //   console.log(bgc);
  // }, 5000);

  let repeatTime = 3000;

  repeater(zSystem.addConstellation.bind(zSystem), repeatTime, duration);
};



function sequenceOneA(duration) {

  const bgSpecs = {
    hueChangeRate: 0.5,
    saturationMax: 20,
    saturationMin: 0,
    lightnessChangeRate: 0.017,
    saturationChangeRate: 0.017,
    lightnessMax: 15,
    lightnessMin: 0,
  }


  console.log('Part 1.a. - Segue')

  let backgroundInterval = setInterval(() => {

    run ? bgColor.backgroundSequencer(bgSpecs) : null;
  }, 20);

  setInterval(() => {
    clearInterval(backgroundInterval);
  }, duration);

  //log the background color every five seconds.
}