function preludeFlash() {
  console.log("prelude flash");

  let preludeFlashScore = [
    // {
    //   function: clearCurrent,
    //   time: 0,
    // },
    // {
    //   function: bgColor.makeWhite,
    //   time: 0,
    // },
    {
      function: bAndWFlash,
      time: 0,
    },
    {
      function: colorFlash,
      time: 6000,
    },
  ];

  sequencer(preludeFlashScore);

  // function clearCurrent() {

  //   zSystem.constellationSets = [];
  //   backdrop.stars = [];
  //   shootingStarSystem.stars = [];
  //   darkStarSystem.stars = []
  // }

  function bAndWFlash() {
    bgColor.makeWhite();
    let blackThenWhiteInterval = setInterval(() => {
      bgColor.makeBlack();
      let makeBlack = setTimeout(() => {
        bgColor.makeWhite();
      }, 500);
    }, 1000);
    setTimeout(() => {
      clearInterval(blackThenWhiteInterval);
    }, 3000);
  }

  function colorFlash() {
    const randCol = () => {
      const rand = createColor(random(360), 90, 70, 1);
      bgColor.setColor(rand, 90, 70, 1);
    };
    repeater(randCol, 75, 3000);
  }

  // bgColor.setColor();
  // bgColor.defaultBGSequence(30000);
}
