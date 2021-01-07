class BackgroundColor {
  //Initialized in setup with no arguments
  constructor() {
    this.h = 155;
    this.s = 100;
    this.l = 100;
    this.a = 1

    this.lightnessIncreasing = true;
    this.saturationIncreasing = true;
  }

  changeColor(color) {
    this.h = color;
  }

  setColor(color) {
    this.h = color.h;
    this.s = color.s;
    this.l = color.l;
    this.a = color.a;
  }

  makeBlack() {
    this.h = 0;
    this.s = 0;
    this.l = 0;
    this.a = 1;
  }

  makeWhite() {
    this.h = 166;
    this.s = 0;
    this.l = 100;
    this.a = 1;
  }

  backgroundSequencer(specs) {

    const lightnessChangeRate = specs.lightnessChangeRate;
    const saturationChangeRate = specs.saturationChangeRate;
    const hueChangeRate = specs.hueChangeRate;

    const lightnessMax = specs.lightnessMax;
    const lightnessMin = specs.lightnessMin;

    const saturationMax = specs.saturationMax;
    const saturationMin = specs.saturationMin;


    //setTimer to increment background saturation and then decrement it.

    if (this.lightnessIncreasing === true) {
      this.l += lightnessChangeRate;
    } else {
      this.l -= lightnessChangeRate;;
    }

    if (this.saturationIncreasing === true) {
      this.s += saturationChangeRate;
    } else {
      this.s -= saturationChangeRate;
    }

    this.h += hueChangeRate;
    this.h = this.h % 360;



    if (this.l < lightnessMin) this.lightnessIncreasing = true;
    if (this.l > lightnessMax) this.lightnessIncreasing = false;

    if (this.s < saturationMin) this.saturationIncreasing = true;
    if (this.s > saturationMax) this.saturationIncreasing = false;

    this.a = 1;

  }
}

