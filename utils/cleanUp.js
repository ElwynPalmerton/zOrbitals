function cleanUp(duration) {
  setTimeout(() => {

    bgc.h = 0;
    bgc.s = 0;
    bgc.l = 00;
    bgc.a = 1;

    sequence = "black"
  }, duration);
}
