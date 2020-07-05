class Attractor {
  constructor(mass, size) {
    this.mass = mass;
    this.size = size;
    this.location = createVector(width / 2, height / 2);
  }

  attracts(mover) {
    //force = Gravity * mass1 * mass2 / dist squared * r.normalized.

    const g = 30;
    const minDistance = 50;
    const maxDistance = 100;


    let force = p5.Vector.sub(this.location, mover.location);

    let distance = force.copy();
    distance = distance.mag();
    distance = constrain(distance, minDistance, maxDistance);

    force.normalize();


    let strength = (g * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }

  display() {
    noStroke();
    fill(50);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}