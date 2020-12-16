
function sequenceOne(duration) {


  //Background value is set.

  bgc = {
    h: 0,
    s: 0,
    l: 10,
    a: 0,
  }

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
    run ? backgroundSequencer(bgSpecs) : null;
  }, 20);
  // }

  setTimeout(() => {
    clearInterval(backgroundInterval);
  }, duration)

  //log the background color every five seconds.
  // setInterval(() => {
  //   console.log(bgc);
  // }, 5000);


  //Create constellations every 3 seconds until this sequence ends.



  let repeatTime = 3000;

  repeater(addConstellation, repeatTime, duration);

};


function sequenceOneA(duration) {

  console.log('sequenceOneA')

  let backgroundInterval = setInterval(() => {
    run ? backgroundWhitener() : null;
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