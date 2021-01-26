function turbulantIntro() {
  console.log('Part - Intro');

  const emerald = createColor(143, 100, 73, 1);
  const black = createColor(0, 0, 0, 1);
  const white = createColor(0, 0, 100, 1);


  let introScore = [
    {
      function: setupIntro,
      time: 0,
    },
    {
      function: starFlashAndVariance,
      time: 30000,
    },
    {
      function: augmentingVariance,
      time: 30000,
    },
  ];




  sequencer(introScore);
  shootingStarSystem.changeColor(emerald);

  //introScore - part 1
  function setupIntro() {
    clearCurrent();
    // bgColor.defaultBGSequence(30000)
    shootingStarSystem.addStars(200);


    const purpleSpecs = {
      hueChangeRate: 0,
      saturationMax: 20,
      saturationMin: 0,
      lightnessChangeRate: 0.017,
      saturationChangeRate: 0.017,
      lightnessMax: 15,
      lightnessMin: 0,
    }


    const darkPurple = createColor(276, 29, 18, 1);
    bgColor.setColor(darkPurple);
  }

  // Part 2 

  function randomVariance() {
    starFlash();

    let duration = introScore[1].time;

    let varianceTimeout
    let varianceInterval = setInterval(() => {
      console.log('randomVariance');

      const resetVariance = () => {
        shootingStarSystem.stars.forEach((star) => {
          star.variance = 0;
        });
      }

      resetVariance();

      let randomDuration = random(2000);

      varianceTimeout = setTimeout(() => {
        randomDuration = random(1000);
        randVariance = random(6);

        const setRandomVariance = () => {
          shootingStarSystem.stars.forEach((star) => {
            star.variance = randVariance;
          })
        }
        setRandomVariance();

      }, randomDuration);
    }, 2000)


    setTimeout(() => {
      console.log("Clearing randomVariance interval/timeouts")
      clearInterval(varianceInterval);
      clearTimeout(varianceTimeout);
    }, duration);
  }



  function starFlash() {
    let duration = introScore[1].time;

    // setTimeout(() => {
    //   backdrop.addStars(200);
    // }, 2500)

    let starTimeout;
    let starInterval;

    function flashStars(randomInterval) {
      backdrop.stars = [];

      starTimeout = setTimeout(() => {
        backdrop.addStars(200);
      }, randomInterval)
    }

    starInterval = setInterval(() => {
      let duration = 2550
      flashStars(duration);
    }, 2700);



    setTimeout(() => {
      console.log("Clearing randomVariance interval/timeouts")
      clearInterval(starInterval);
      clearTimeout(starTimeout);
    }, duration);
  }

  function starFlashAndVariance() {
    randomVariance();
    starFlash();
  }

  function peachExplosion() {
    darkStarSystem.addStars(100);
    darkStarSystem.stars.forEach((star) => {
      star.color = { h: 0, s: 50, l: 90, a: 1 }
    })
  }


  // Part 3 

  function augmentingVariance() {

    function addVariance() {
      shootingStarSystem.stars.forEach((star) => {
        star.variance += 0.008;
      })
    }

    repeater(addVariance, 10, 10000);
    setTimeout(() => {
      shootingStarSystem.setVariance(2.5);
    }, 10000)

    setTimeout(() => {
      shootingStarSystem.setVariance(1);
    }, 15000)

    setTimeout(() => {
      shootingStarSystem.setVariance(0);
    }, 20000)


    const clearDarkStars = () => {
      darkStarSystem.stars = [];
    }

    switchRepeater(
      peachExplosion,
      clearDarkStars,
      500,
      2500,
      30100
    );

  }
}
