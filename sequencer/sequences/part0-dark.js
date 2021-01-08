function incrementShootingStarHue() {
  console.log('changecolor');
  let col = createColor(0, 0, 100, 10);

  let incrementHue = setInterval(() => {
    col.h += 0.1;
    col.h = col.h % 360;
  }, 10);

  let incrementSaturation = setInterval(() => {
    col.s += 0.1;
    if (col.s > 100) clearInterval(incrementSaturation);
  }, 10);

  // let incrementLightness = setInterval(() => {
  //   col.l += 0.1;
  // }, 10);

  // let incrementAlpha = setInterval(() => {
  //   col.a += 0.1;
  // }, 10);

  let changeColor = setInterval(() => {
    shootingStarSystem.changeColor(col);
  }, 10);
}

function darkSequence() {

  console.log('prelude flash');

  let darkScore = [
    {
      function: introStars,
      time: 10000,
    },
    {
      function: changeStarColor,
      time: 20000,
    },
  ];

  bgColor.makeBlack();

  sequencer(darkScore);
  clearCurrent();

  function introStars() {
    let addOneStar = setInterval(() => {
      let col = createColor(0, 0, 100, 10);
      shootingStarSystem.addStars(1, col);
      if (shootingStarSystem.stars.length > 100) {
        clearInterval(addOneStar);
        console.log('clearing addOneStar');
      }
    }, 500)
  }

  function changeStarColor() {


    setTimeout(() => {
      bgColor.makeWhite();

      setTimeout(() => {
        bgColor.makeBlack();
      }, 100)

    }, 3000)

    //limit the duration on this.
    //incrementShootingStarHue(duration);  ---refactor like this.
    incrementShootingStarHue();
  }
}