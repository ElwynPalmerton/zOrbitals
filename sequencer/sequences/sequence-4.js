function sequenceFour(duration) {
  console.log("sequence Four");
  sequence = "addAlpha";




  function cleanUp() {
    setTimeout(() => {

      bgc.h = 0;
      bgc.s = 0;
      bgc.l = 30;
      bgc.a = 0;


    }, duration);
  }


  // cleanUp(duration);

}