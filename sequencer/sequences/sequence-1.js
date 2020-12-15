


function sequenceOne(duration) {

  // bgc.h = 0;
  // bgc.s = 0;
  // bgc.l = 30;
  // bgc.a = 0;

  sequence = "one";
  //duration gets passed into the repeater

  //args: massRange, ratio of blinker to faders.


  let repeatTime = 3000;
  repeater(addConstellations, repeatTime, 10, duration);
};
