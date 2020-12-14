let score = [
  {
    function: sequenceOne,
    time: 3000,
  },

  {
    function: sequenceTwo,
    time: 3000,
  },

  {
    function: afterNext,
    time: 5000,
  }
];

let start = Date.now();

let first = true;

function sequencer() {
  i = 0;

  //console.log(start);
  score[i].function(score[i].time);

  function nextSequence(i) {
    let sequenceTimer = setTimeout(() => {

      let currentTime = Date.now() - start;
      console.log("Timer in sequencer: ", currentTime);

      i++;

      score[i].function(score[i].time);

      if (i < score.length - 1) {
        clearInterval(sequenceTimer);
        nextSequence(i);
      } else {
        console.log("Done");
      }
    }, score[i].time);
  }

  if (first) {
    console.log("first next")
    first = false;
    nextSequence(0);
  }
}
