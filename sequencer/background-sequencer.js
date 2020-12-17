function backgroundSequencer(specs) {

  const lightnessChangeRate = specs.lightnessChangeRate;
  const saturationChangeRate = specs.saturationChangeRate;
  const hueChangeRate = specs.hueChangeRate;

  const lightnessMax = specs.lightnessMax;
  const lightnessMin = specs.lightnessMin;

  const saturationMax = specs.saturationMax;
  const saturationMin = specs.saturationMin;


  //setTimer to increment background saturation and then decrement it.

  if (lightnessIncreasing === true) {
    bgc.l += lightnessChangeRate;
  } else {
    bgc.l -= lightnessChangeRate;;
  }

  if (saturationIncreasing === true) {
    bgc.s += saturationChangeRate;
  } else {
    bgc.s -= saturationChangeRate;
  }

  bgc.h += hueChangeRate;
  bgc.h = bgc.h % 360;



  if (bgc.l < lightnessMin) lightnessIncreasing = true;
  if (bgc.l > lightnessMax) lightnessIncreasing = false;

  if (bgc.s < saturationMin) saturationIncreasing = true;
  if (bgc.s > saturationMax) saturationIncreasing = false;

  bgc.a = 1;

}

function backgroundWhitener() {

  if (bgc.h < 226) {
    bgc.h += 1;
  }

  if (bgc.l < 100) {
    bgc.l += 0.30;
  }
}


function addAlpha() {

  if (bgc.h < 217) {
    bgc.h += 0.1;
  }

  if (bgc.l < 30) {
    bgc.l += 0.1;
  }

  if (bgc.a < 0.5) {
    bgc.a += 0.0001;
  }

}

