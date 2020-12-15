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




// const colorSpecs = {
//   lightnessChangeRate: 0.011,
//   saturationChangeRate: 0.017,
//   hueChangeRate: 0.5,
//   lightnessMax: 15,
//   lightnessMin: 0,
//   saturationMax: 20,
//   saturationMin: 0
// }



// function bgSequenceOne() {

//   // console.log('bg one');

//   const colorSpecs = {
//     lightnessChangeRate: 0.011,
//     saturationChangeRate: 0.017,
//     hueChangeRate: 0.5,
//     lightnessMax: 15,
//     lightnessMin: 0,
//     saturationMax: 20,
//     saturationMin: 0
//   }
//   return oscillateBackground(colorSpecs);
//   // bg = Object.assign({}, bgc);
// }

// let counter = 0;
// let first = true;

// function addAlpha() {
//   if (bgc.a < 1) {
//     bgc.a += 0.0003;
//     return bgc;
//   } else {
//     return bgc;
//   }
//   // return bgc;
// }

// function bgSequenceTwo() {
//   // console.log('sequenceTwo')
//   const colorSpecs = {
//     lightnessChangeRate: 0.011,
//     saturationChangeRate: 0.09,
//     hueChangeRate: 0.5,
//     lightnessMax: 50,
//     lightnessMin: 0,
//     saturationMax: 50,
//     saturationMin: 0
//   }
//   return oscillateBackground(colorSpecs);
// }

// function whitenSeq() {
//   if (bgc.l < 100) {
//     bgc.l += 0.003;
//   }


//   return bgc;
// }


// switch (sequence) {
//   case "one":
//     return bgSequenceOne();
//     break;
//   case "white":
//     return { h: 0, s: 0, l: 100, a: 1 };
//     break;
//   // case "zeroAlphaWhite":
//   //   return { h: 0, s: 0, l: 100, a: 0 };
//   //   break;
//   case "whiten":
//     return whitenSeq();
//     break;
//   case "black":
//     return { h: 0, s: 0, l: 0, a: 0 };
//     break;
//   case "opaqueBlack":
//     return { h: 0, s: 0, l: 0, a: 1 };
//     break;
//   case "reset":
//     return { h: 0, s: 0, l: 0, a: 0 };
//     break;
//   case "addAlpha":
//     return addAlpha();
//     break;
//   case "bgSequenceTwo":
//     return bgSequenceTwo();
//     break;
//   default:
//     // console.log('default bg');
//     return { h: 0, s: 100, l: 100, a: 0.5 }
//     break;
// }

// }