

defaultAttractor = {
  mass: 50,
  size: 70,
  x: 0,
  y: 0,
  gravity: 100,
};

function createRandomColor(type) {
  let randomColor = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  if (type === "yellow") {
    randomColor.h = Math.floor(random(40, 75));
    randomColor.l = Math.floor(random(80, 100));
    randomColor.s = 95//Math.floor(random(75, 100));
    randomColor.a = 0.75 //random(0, 0.8);
  } else if (type === "blue") {
    randomColor.h = 240;
    randomColor.l = Math.floor(random(50, 100));
    randomColor.s = Math.floor(random(30, 100));
    randomColor.a = random(0, 0.8);
  }

  return randomColor;
}

function createRandomMovers() {
  const randomMovers = {
    mass: 0,
    size: 0,
    qty: 0,
  }

  randomMovers.mass = Math.floor(random(10, 40));
  randomMovers.size = Math.floor(random(100, 200));
  randomMovers.qty = Math.floor(random(1, 15));
  return randomMovers;

}

function sequencing(duration) {
  console.log(duration);
  let currentTime = Date.now() - start;
  // console.log("Timer: ", i, currentTime);
  let intervalTwo;
  let i = 0;
  runSequence();

  function runSequence() {

    console.log(i);

    /////////////////////////////////////////
    //Everything from here down to the next "bar" can be encapsulated into a function
    //called sequenceOne which is saved in the array which gets saved in the score
    //and gets passed into sequencing.

    let coin = random() < 0.2;
    let newColor;
    if (coin) {
      randomType = "yellow";
    } else {
      randomType = "blue";
    };

    newColor = createRandomColor(randomType);

    let newSequenceMovers = createRandomMovers();
    //let newRandomMover = createRandomMovers(scale);

    if (i < 10) {
      console.log("Creating constellation");
      createConstellation(newSequenceMovers, defaultAttractor, newColor, randomType);
    } else {
      createConstellation(newSequenceMovers, defaultAttractor, newColor, randomType);
      moverSet.splice(0, 1);
    }

    //////////////////////////////////////////////

    intervalTwo = setTimeout(() => {
      runSequence();
    }, 3000);

    i++

  }

  setTimeout(() => {
    console.log("Clearing");
    clearTimeout(intervalTwo);
  }, duration);
}

function next() {
  console.log("Nexting");
}

function afterNext() {
  console.log("After nexting");
}


let score = [
  //I need to do some file organization.
  //Sequencer files should go together.
  //All of the sequences (sequenceOne, sequenceTwo, ...) should be in their own folder.
  //Put the animation element classes into one folder.
  //
  //Where should background-sequence go?
  {
    function: sequencing,
    time: 30000,
  },
  {
    function: next,
    time: 5000,
  },
  {
    function: afterNext,
    time: 5000,
  }
];

let start = Date.now();


function sequencer() {

  //console.log(start);
  score[i].function(score[i].time);

  function nextSequence(i) {
    let sequenceTimer = setTimeout(() => {

      let currentTime = Date.now() - start;
      console.log("Timer in sequencer: ", currentTime);

      i++;
      score[i].function(score[i].time);

      if (i < score.length - 1) {
        nextSequence(i);
      } else {
        console.log("Doner");
      }
    }, score[i].time);
  }

  nextSequence(0);
}
