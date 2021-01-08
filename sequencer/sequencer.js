let masterScore = [
  // {   //part 0.a.
  //   function: preludeFlash,
  //   time: 6000,
  // },
  {   //part 0.a.
    function: darkSequence,
    time: 180000,
  },
  {  //part 0.b.
    function: turbulantIntro,
    time: 60000,
  },
  {
    function: prelude,
    time: 50000,
  },
  {
    function: sequenceSix,
    time: 50000,
  },
  {
    function: sequenceOneA,
    time: 5000,
  },
  {
    function: rainbowHive,
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
    function: sequenceSeven,
    time: 100000,
  },

];

let start = Date.now();


function sequencer(score) {
  let first = true;
  // let i = 0;
  let sequenceIndex = 0;

  console.log('sequenceIndex at start', sequenceIndex);
  //console.log(start);
  score[sequenceIndex].function(score[sequenceIndex].time);


  setInterval(() => {
    let currentTime = Date.now() - start;
    console.log("time: ", parseInt(currentTime / 1000));
  }, 10000)

  function nextSequence(sequenceIndex) {
    let sequenceTimer = setTimeout(() => {

      // I don't need currentTime unless I want to do a check on the actual
      //... running time to correct for small timing errors.

      sequenceIndex++;
      console.log("sequence index in master: ", sequenceIndex);

      if (sequenceIndex < score.length) {
        score[sequenceIndex].function(score[sequenceIndex].time);
        nextSequence(sequenceIndex);
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
