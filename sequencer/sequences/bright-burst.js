function brightBurst() {
  console.log("Bright Burst");
  let brightScore = [
    {
      function: begin,
      time: 0,
    },
    {
      function: normalizeBG,
      time: 5000,
    },
  ];

  sequencer(brightScore);

  //BrightBurst score Part 1
  function begin() {
    console.log("Bright Burst begin");

    bAndWFlash(100, 1000);

    //Adds a zillion constallations immediately
    const CONSTELLATIONS = 20;
    for (let i = 0; i < CONSTELLATIONS; i++) {
      zSystem.addConstellation();
    }

    backdrop.addStars(1000);
  }

  function bAndWFlash(rate, duration) {
    let blackThenWhiteInterval = setInterval(() => {
      console.log("Flash bgLayer");
      bgLayer.makeWhite();
      let makeBlack = setTimeout(() => {
        bgColor.makeBlack();
        bgLayer.makeTransparent();
      }, rate);
    }, rate * 2);
    setTimeout(() => {
      clearInterval(blackThenWhiteInterval);
    }, duration);
  }

  function normalizeBG() {
    const darkStarColor = createColor(0, 0, 10, 0.7);

    darkStarSystem.changeColor(darkStarColor);

    bgColor.setColor();

    let repeatTime = 3000;
    duration = 10000;

    setTimeout(() => {
      bAndWFlash(100, 1000);
    }, 3800);

    setTimeout(() => {
      bAndWFlash(50, 600);
    }, 6000);

    setTimeout(() => {
      bgColor.makeBlack();
      clearCurrent();
      initialSequence();

      repeater(zSystem.addConstellation.bind(zSystem), repeatTime, duration);

      const bgSpecs = {
        hueChangeRate: 0.5,
        saturationMax: 20,
        saturationMin: 0,
        lightnessChangeRate: 0.017,
        saturationChangeRate: 0.017,
        lightnessMax: 15,
        lightnessMin: 0,
      };

      //Set the background color every 20 milliseconds
      let backgroundInterval = setInterval(() => {
        run ? bgColor.backgroundSequencer(bgSpecs) : null;
      }, 20);
    }, 5000);
  }
}
