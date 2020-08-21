

defaultAttractor = {
  mass: 50,
  size: 70,
  x: 0,
  y: 0,
  gravity: 100,
};


// function createRandomMovers() {
//   const randomMovers = {
//     mass: 0,
//     size: 0,
//     qty: 0,
//   }

//   randomMovers.mass = Math.floor(random(10, 40));
//   randomMovers.size = Math.floor(random(100, 200));
//   randomMovers.qty = Math.floor(random(1, 15));
//   return randomMovers;

// }



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

      if (i < score.length - 1) {
        nextSequence(i);
      } else {
        console.log("Done");
      }
    }, score[i].time);
  }

  nextSequence(0);
}
