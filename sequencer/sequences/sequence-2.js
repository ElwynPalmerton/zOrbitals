

function blackThenWhite() {
  //Turns the background white and then black after three seconds.

  black = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  white = {
    h: 0,
    s: 0,
    l: 1,
    a: 1,
  }

  bgc = black;

  setInterval(() => {
    bgc = white;
    setTimeout(() => {
      bgc = black;
    })
  }, 8000)


}

function sequenceTwo(duration) {


  bgc.h = 0;
  bgc.l = 0;
  bgc.s = 0;
  bgc.a = 0;


  console.log('sequence two');

  setTimeout(() => {
    console.log('whitestars');
    darkStarSystem.changeColor(
      { h: 0, s: 0, l: 100, a: 1 });


    bgc.h = 0;
    bgc.l = 0;
    bgc.s = 0;
    bgc.a = 0;
  }, 15000);

  setTimeout(() => {
    console.log('re-darkstars');
    darkStarSystem.changeColor(
      { h: 0, s: 0, l: 0, a: 0.25 })


    bgc.h = 0;
    bgc.l = 0;
    bgc.s = 0;
    bgc.a = 0;
  }, 30000);

  //Does it turn white again at any point?
  //1a. Gradually turns white.
  //2.  Then background turns fully transparent black.
  //3.  Dark stars start overpainting the background.
  //        -These should be phased in one at a time.
  //4.  White stars phased in.
  //        -Phase these in one at a time.
  //
  // II. 
  // 1. Same as above but faster phasing. 
  //       -alternating back and forth rapidly.
  //
  //Run the sequence with the timer on (log each second)
  //..and figure out exactly what is happening before finishing this.

  repeater(system.addConstellation.bind(system), 3000, duration);
  // repeater(blackThenWhite, 9000, 10, duration);
  setTimeout(() => {
    // bgc.a = 0;
  }, duration);



}