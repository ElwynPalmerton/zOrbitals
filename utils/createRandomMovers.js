//Creates a mover with a random mass, size, and qty within the given ranges below.


function createRandomMovers() {
  const randomMovers = {
    mass: 0,
    size: 0,
    qty: 0,
  }

  randomMovers.mass = Math.floor(random(10, 40));
  randomMovers.size = Math.floor(random(100, 200));
  randomMovers.qty = Math.floor(random(1, 15));
  return randomMovers;
}