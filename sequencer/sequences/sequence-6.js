function sequenceSix(duration) {
  //Refactor this and sequencer to pass stuff into sequencer.

  console.log("sequence Six");
  sequence = "white";

  function flash(duration) {


    function blackThenWhite() {
      // sequence = "white";
      let sequenceSetter = setTimeout(() => {
        // sequence = "opaqueBlack";

      }, 1000);
    }

    let flashInterval = setInterval(() => {
      blackThenWhite();
    }, 2000)

    setTimeout(() => {
      console.log('clearing');
      clearInterval(flashInterval);
      // sequence = "white";
    }, duration)

  }

  flash(12000);

  setTimeout(() => {
    darkStarSystem.addStars(100);
  }, 5000);

  setTimeout(() => {
    darkStarSystem.addStars(10);
  }, 4000);

  setTimeout(() => {
    console.log('adding stars');
    shootingStarSystem.addStars(10);
  }, 8000);

  setTimeout(() => {
    let starInterval = setInterval(() => {
      stars = []
      sequence = "white";

      setTimeout(() => {
        sequence = "opaqueBlack"
        // addShootingStars(10);
        backdrop.addStars(300);
        // starSystem.addBlinkers(300, { h: 0, s: 0, l: 100, a: 1 });
      }, 1000)
    }, 2000)

    console.log(shootingStarSystem);
    //When stars equal a certain density clear all the Intervals

    setTimeout(() => {
      console.log('cleared');
      clearInterval(starInterval);
    }, 10000)

  }, 12000);


  cleanUp(duration);

}