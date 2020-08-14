class Attractor {
  constructor(mass, size, x, y, attractorColor, gravity) {
    this.mass = mass;
    this.size = size;

    //let xPos = x * scale * scl * width;
    //let yPos = y * scale * scl * height;

    this.location = createVector(0, 0);
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

    let strength = (this.gravity * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }

  display() {
    noStroke();
    fill(this.attractorColor.h, this.attractorColor.s, this.attractorColor.l, this.attractorColor.a);
    ellipse(this.location.x * scl, this.location.y * scl, this.size * scl, this.size * scl);
  }
}