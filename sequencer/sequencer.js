

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



let score = [
  {
    function: sequenceOne,
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
