

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
    l: 100,
    a: 1,
  }

  bgc = black;

  setInterval(() => {
    bgColor.setColor(white);
    setTimeout(() => {
      bgColor.setColor(black);
    })
  }, 8000)


}

function rainbowHive(duration) {

  black = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  white = {
    h: 0,
    s: 0,
    l: 100,
    a: 1,
  }
  // bgColor.h = 0;
  // bgColor.l = 0;
  // bgColor.s = 0;
  // bgColor.a = 0;

  console.log('setting white');
  bgColor.makeWhite();


  console.log('Rainbow Hive');

  setTimeout(() => {
    console.log('whitestars');
    darkStarSystem.changeColor(
      { h: 0, s: 0, l: 100, a: 1 });


    bgColor.h = 0;
    bgColor.l = 0;
    bgColor.s = 0;
    bgColor.a = 0;
  }, 15000);

  setTimeout(() => {
    console.log('re-darkstars');
    darkStarSystem.changeColor(
      { h: 0, s: 0, l: 0, a: 0.25 })


    bgColor.h = 0;
    bgColor.l = 0;
    bgColor.s = 100;
    bgColor.a = 1;
  }, 30000);



  repeater(zSystem.addConstellation.bind(zSystem), 3000, duration);
  // repeater(blackThenWhite, 9000, 10, duration);
  setTimeout(() => {
    // bgc.a = 0;
  }, duration);

}




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