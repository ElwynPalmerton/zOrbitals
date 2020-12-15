

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
    darkStars.forEach(star => {
      star.color.h = 0;
      star.color.s = 0;
      star.color.l = 100;
      star.color.a = 1;
    })


    bgc.h = 0;
    bgc.l = 0;
    bgc.s = 0;
    bgc.a = 0;
  }, 15000);

  setTimeout(() => {
    console.log('re-darkstars');
    darkStars.forEach(star => {
      star.color.h = 0;
      star.color.s = 0;
      star.color.l = 0;
      star.color.a = 0.25;
    })


    bgc.h = 0;
    bgc.l = 0;
    bgc.s = 0;
    bgc.a = 0;
  }, 30000);

  repeater(addConstellations, 3000, 5, duration);
  // repeater(blackThenWhite, 9000, 10, duration);
  setTimeout(() => {
    // bgc.a = 0;
  }, duration);



}