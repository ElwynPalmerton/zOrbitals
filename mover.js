class Mover {


  constructor(mass, size) {
    //Create vector
    const startSpeed = 10;
    const defaultAcceleration = 30;

    this.mass = mass;
    this.size = size;

    this.location = createVector(100, 100);

    this.velocity = createVector(random(-startSpeed, startSpeed), random(-startSpeed, startSpeed));

    this.acceleration = createVector(defaultAcceleration, defaultAcceleration);
  }


  update() {
    console.log(this.location);
    const topSpeed = 10;
    //Apply acceleration to the velocity.
    //Apply the velocity to the position.

    this.velocity.add(this.acceleration);

    this.velocity.x = constrain(this.velocity.x, -topSpeed, topSpeed);
    this.velocity.y = constrain(this.velocity.y, -topSpeed, topSpeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

  }


  applyForce(f) {
    // Divide the force by mass.
    // Add the force to the acceleration.
    f = f.div(this.mass);
    this.acceleration.add(f);


  }

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
    fill(50);

    ellipse(this.location.x, this.location.y, this.size, this.size);

  }
}