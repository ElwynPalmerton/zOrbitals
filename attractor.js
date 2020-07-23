class Attractor {
  constructor(mass, size, x, y, attractorColor, gravity) {
    this.mass = mass;
    this.size = size;
    this.location = createVector(x * width, y * height);
    this.attractorColor = attractorColor;
    this.gravity = gravity;
  }

  attracts(mover) {
    //force = Gravity * mass1 * mass2 / dist squared * r.normalized.
    const g = this.gravity;
    const minDistance = c.minDistance;
    const maxDistance = c.maxDistance;


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
    fill(this.attractorColor);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}