function backgroundSequencer() {

  function bgSequenceOne() {

    const bgChangeRate = 0.011;
    const saturationChangeRate = 0.017;
    const colorChangeRate = 0.5;

    const lightnessMax = 15;
    const lightnessMin = 0;

    const saturationMax = 20;
    const saturationMin = 0;


    //setTimer to increment background saturation and then decrement it.

    if (lightnessIncreasing === true) {
      bgc.l += bgChangeRate;
    } else {
      bgc.l -= bgChangeRate;;
    }

    if (saturationIncreasing === true) {
      bgc.s += saturationChangeRate;
    } else {
      bgc.s -= saturationChangeRate;
    }

    bgc.h += colorChangeRate;
    bgc.h = bgc.h % 360;



    if (bgc.l < lightnessMin) lightnessIncreasing = true;
    if (bgc.l > lightnessMax) lightnessIncreasing = false;

    if (bgc.s < saturationMin) saturationIncreasing = true;
    if (bgc.s > saturationMax) saturationIncreasing = false;

    return bgc
    // bg = Object.assign({}, bgc);
  }


  if (sequence === "one") {
    return bgSequenceOne();
  } else if (sequence === "two") {
    return { h: 0, s: 0, l: 0, a: 0 };
  }



  // setTimeout() => {

  //   bgSequenceOne
  //   // bg = Object.assign({}, bgc);
  // }
}