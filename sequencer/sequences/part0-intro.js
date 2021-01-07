function intro() {

  console.log('Part - Intro');

  backdrop.stars = [];
  darkStarSystem.stars = []


  function createColor(h, s, l, a) {
    return {
      h,
      s,
      l,
      a,
    }
  }


  const emerald = createColor(143, 100, 73, 1);
  const black = createColor(0, 0, 0, 1);
  const white = createColor(0, 0, 100, 1);




  shootingStarSystem.changeColor(emerald);


  const time = random(1000, 3000);

  bgColor.changeColor(50)


  setTimeout(() => {
    bgColor.changeColor(155)
  }, 1000)



  setTimeout(() => {
    bgColor.changeColor(200)
  }, 2000)


  setTimeout(() => {
    bgColor.setColor(white)
  }, 3000)

  setTimeout(() => {
    bgColor.makeBlack();
  }, 4000);


  setTimeout(() => {
    bgColor.setColor(white)
  }, 5000)

}



  // const bgSpecs = {
  //   hueChangeRate: 0.5,
  //   saturationMax: 30,
  //   saturationMin: 10,
  //   lightnessChangeRate: 0.017,
  //   saturationChangeRate: 1,
  //   lightnessMax: 50,
  //   lightnessMin: 0,
  // }

  // setTimeout(() => {
  //   bgColor.setColor({ h: 0, s: 1, l: 1, a: 100 })

  //   setInterval(() => {

  //     bgColor.backgroundSequencer(bgSpecs);
  //   }, 20)

  // }, 3000)
