class Mover {

  constructor(mass = 200, size = 100, startSpeed = 20, col = { h: 0, s: 0, l: 1, a: 1 }) {
    //Create vector
    // const startSpeed = 10;
    const defaultAcceleration = 0;


    this.col = col;



    this.mass = mass;
    this.size = size * scale;

    this.location = createVector(random(-width, width), random(-height, height));

    this.velocity = createVector(random(-startSpeed, startSpeed), random(-startSpeed, startSpeed));

    this.acceleration = createVector(random(-defaultAcceleration, defaultAcceleration), random(-defaultAcceleration, defaultAcceleration));
  }

  setColor(color) {
    this.col = Object.assign({}, color);
  }

  attracts(mover) {
    //force = Gravity * mass1 * mass2 / dist squared * r.normalized.
    const g = c.gravity;
    const minDistance = c.minDistance;
    const maxDistance = c.maxDistance;

    let force = p5.Vector.sub(this.location, mover.location);

    let distance = force.copy();
    distance = distance.mag();
    distance = constrain(distance, minDistance, maxDistance);

    force.normalize();

    // let strength = (g * this.mass * mover.mass) / (distance * distance * c.sclDistance);
    let strength = (g * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }


  update() {
    const topSpeed = c.topSpeed;
    //Apply acceleration to the velocity.
    //Apply the velocity to the position.

    this.velocity.add(this.acceleration);

    let speed = this.velocity.mag();
    speed *= c.sclDistance;
    if (speed > topSpeed) {
      this.velocity.normalize();
      this.velocity.mult(topSpeed);
    }

    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }


  applyForce(f) {
    // Divide the force by mass.
    // Add the force to the acceleration.
    f = f.div(this.mass);
    this.acceleration.add(f);
  }

  //Not currently used.
  checkEdges() {
    if (this.location.x >= width) {
      this.location.x = 0;
    } else if (this.location.x <= 0) {
      this.location.x = 0;
    } else if (this.location.y >= height) {
      this.location.y = 0;
    } else if (this.location.y <= 0) {
      this.location.y = height;
    }
  }

  display() {
    // console.log(this.location);
    noStroke();
    // fill(color('hsla(160,  80%, 40%, 0.5)'));
    fill(this.col.h, this.col.s, this.col.l, this.col.a);
    // fill(this.col);
    // fill(50);
    ellipse(this.location.x * scl, this.location.y * scl, this.size * scl, this.size * scl);
  }
}


class FadeMover extends Mover {
  constructor(mass = 200, size = 100, startSpeed = 20, col = { h: 0, s: 0, l: 1, a: 1 }) {
    const saturationVariance = 50;
    super(mass = 200, size, startSpeed = 20, col = { h: 0, s: 0, l: 1, a: 1 });
    this.saturationChangeRate = random(0, 1);
    this.i = 0;
    this.col.s = 50;
    this.minSaturation = 40;
    this.maxSaturation = 100;
    this.increasing = true;
    this.fadeInterval = random(100, 300);
  }

  update() {


    this.i++;
    super.update();
    if (this.increasing === true) {
      this.col.s += this.saturationChangeRate;
    } else {
      this.col.s -= this.saturationChangeRate;
    }

    if (this.col.s >= this.maxSaturation) {
      this.increasing = false;
    } else if (this.col.s <= this.minSaturation) {
      this.increasing = true;
    }
  }
}

class BlinkMover extends FadeMover {
  constructor(mass = 200, size = 100, startSpeed = 20, col = { h: 0, s: 0, l: 1, a: 1 }) {
    super(mass = 200, size, startSpeed = 20, col);
    this.blinkIndex = 0;
    this.blinkColor = Object.assign({}, col);
    this.col = Object.assign({}, col);
    this.blinkInterval = random(100, 300);
    this.disappearedColor = {
      h: 0,
      s: 0,
      l: 0,
      a: 0
    }
    //super();
  }

  setColor(color) {
    this.col = Object.assign({}, color);
    this.blinkColor = Object.assign({}, color);
  }

  update() {
    this.blinkIndex++;
    super.update();
    if (this.blinkIndex % this.blinkInterval < this.blinkInterval / 2) {
      this.col = this.blinkColor;
    } else {
      this.col = this.disappearedColor;
    }
  }
}

//Make a faderMover
//Randomize the selection of movers within each group.
