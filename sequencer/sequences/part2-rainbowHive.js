

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
    console.log('bg white');
    bgColor.setColor(white);
    setTimeout(() => {
      console.log('bg black');
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
    s: 100,
    l: 100,
    a: 0,
  }

  console.log('Rainbow Hive');

  darkStarSystem.changeColor(
    { h: 0, s: 0, l: 100, a: 1 })
  bgColor.setColor(black);

  setTimeout(() => {
    console.log('whitestars');
    darkStarSystem.changeColor(
      { h: 0, s: 0, l: 100, a: 1 });

    bgColor.setColor(black);

  }, 8000);

  setTimeout(() => {
    console.log('re-darkstars');
    darkStarSystem.changeColor(
      { h: 0, s: 0, l: 0, a: 1 })

    bgColor.setColor(white);

  }, 16000);



  repeater(zSystem.addConstellation.bind(zSystem), 3000, duration);
  // repeater(blackThenWhite, 9000, 10, duration);

}


