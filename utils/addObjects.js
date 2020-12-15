function addBlinkers(qty, blinkColor) {
  for (let i = 0; i < qty; i++) {
    let star = new Blinker(blinkColor);
    stars.push(star);
  }
}


function addDarkStars(qty) {
  for (let i = 0; i < qty; i++) {
    let newStar = new DarkStar();
    darkStars.push(newStar);
  }
}


function addShootingStars(qty) {
  for (let i = 0; i < qty; i++) {
    let newStar = new ShootingStar();
    shootingStars.push(newStar);
  }
}