class Mover {


  constructor(mass = 200, size = 50, startSpeed = 20, col) {
    //Create vector
    // const startSpeed = 10;
    const defaultAcceleration = 0;

    this.col = col;
    this.mass = mass;
    this.size = size;

    this.location = createVector(random(width), random(height));

    this.velocity = createVector(random(-startSpeed, startSpeed), random(-startSpeed, startSpeed));

    this.acceleration = createVector(random(-defaultAcceleration, defaultAcceleration), random(-defaultAcceleration, defaultAcceleration));
  }

  attracts(mover) {
    //force = Gravity * mass1 * mass2 / dist squared * r.normalized.

    const g = c.gravity;
    const minDistance = c.minDistance;
    const maxDistance = c.maxDistance;


    let force = p5.Vector.sub(this.location, mover.location);

    let distance = force.copy();
    distance = distance.mag() * c.sclDistance;
    distance = constrain(distance, minDistance, maxDistance);

    force.normalize();


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
    fill(this.col);
    // fill(50);


    ellipse(this.location.x, this.location.y, this.size, this.size);

  }
}