function cleanUp(duration) {
  setTimeout(() => {

    bgc.h = 0;
    bgc.s = 0;
    bgc.l = 30;
    bgc.a = 0;

    sequence = "black"
  }, duration);
}
