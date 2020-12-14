//Creates a random color within a certain range for yellow or blue zOrbitals
//Called from createConstellation


function createRandomColor(type) {
  const randomColor = {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  }

  if (type === "yellow") {
    randomColor.h = Math.floor(random(50, 75));
    randomColor.l = Math.floor(random(80, 100));
    randomColor.s = 95//Math.floor(random(75, 100));
    randomColor.a = 0.75 //random(0, 0.8);
  } else if (type === "blue") {
    randomColor.h = 240;
    randomColor.l = Math.floor(random(70, 100));
    randomColor.s = Math.floor(random(50, 100));
    randomColor.a = random(0, 0.8);
  }

  return randomColor;
}
