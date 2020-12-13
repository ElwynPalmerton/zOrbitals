

defaultAttractor = {
  mass: 50,
  size: 70,
  x: 0,
  y: 0,
  gravity: 100,
};






let score = [
  {
    function: sequenceOne,
    time: 300000,
  }];

//   {
//     function: next,
//     time: 5000,
//   },
//   {
//     function: afterNext,
//     time: 5000,
//   }
// ];

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

      if (i <= score.length - 1) {
        nextSequence(i);
      } else {
        console.log("Done");
      }
    }, score[i].time);
  }

  nextSequence(0);
}
