function flip(a, b) {

  let coin = random() < 0.2;
  let newColor;
  if (coin) {
    return a;
  } else {
    return b;
  };
}
