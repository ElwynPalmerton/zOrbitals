let masterScore = [
  {
    function: sequenceOne,
    time: 30000,
  },
  {
    function: sequenceOneA,
    time: 5000,
  },
  {
    function: sequenceTwo,
    time: 60000,
  },
  {
    function: sequenceThree,
    time: 15000,
  },
  {
    function: sequenceFour,
    time: 10000,
  },
  {
    function: sequenceFive,
    time: 8000,
  },
  {
    function: sequenceSix,
    time: 50000,
  },
  {
    function: sequenceSeven,
    time: 100000,
  },

];

let start = Date.now();

let first = true;

function sequencer(score) {
  let i = 0;
  sequenceIndex = 0;

  //console.log(start);
  score[i].function(score[i].time);


  setInterval(() => {
    let currentTime = Date.now() - start;
    console.log("time: ", parseInt(currentTime / 1000));
  }, 10000)

  function nextSequence(i) {
    let sequenceTimer = setTimeout(() => {

      // I don't need currentTime unless I want to do a check on the actual
      //... running time to correct for small timing errors.

      sequenceIndex++;

      if (i < score.length) {
        score[sequenceIndex].function(score[sequenceIndex].time);
        nextSequence(i);
      } else {
        console.log("Done: Ran all sequences in score.");
      }
    }, score[sequenceIndex].time);
  }


  if (first) {
    first = false;
    nextSequence(0);
  }
}
