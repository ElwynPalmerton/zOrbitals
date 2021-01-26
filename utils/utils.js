function cleanUp(duration) {
  setTimeout(() => {

    bgc.h = 0;
    bgc.s = 0;
    bgc.l = 00;
    bgc.a = 1;

    sequence = "black"
  }, duration);
}

function createColor(h, s, l, a) {
  return {
    h,
    s,
    l,
    a,
  }
}

function flip(a, b) {

  let coin = random() < 0.2;
  let newColor;
  if (coin) {
    return a;
  } else {
    return b;
  };
}
