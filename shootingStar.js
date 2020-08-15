// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

class ShootingStar {
  constructor() {
    this.x = random(-windowWidth / 2, windowWidth / 2);
    this.y = random(-windowHeight / 2, windowHeight / 2);
    this.z = random(windowWidth);
    //this.px = random(-width / 2, width / 2);
    //this.py = random(-height / 2, height / 2);

    this.pz = this.z;
    this.variance = 0;
    this.angle = 0;
  }//

  update(rotation) {
    //Passing a rotation variable into rotate only rotates the Starfield stars because the DarkStars have their own Context in their display method.
    this.angle += rotation;
    this.z = this.z - speed * 0.3;
    if (this.z < 90) {
      this.z = windowWidth;
      this.x = random(-windowWidth / 4, windowWidth / 4);
      this.y = random(-windowHeight / 4, windowHeight / 4);
      this.pz = this.z;
    }
  }

  display() {
    push();
    rotate(this.angle);
    //
    fill(200, 255, 100);
    // noStroke();

    var sx =
      map(this.x / this.z, 0, 1, 0, windowWidth) +

      random(-this.variance, this.variance);
    var sy =
      map(this.y / this.z, 0, 1, 0, windowHeight) +
      random(-this.variance, this.variance);

    var r = map(this.z, windowWidth, 0, 1, 12);
    ellipse(sx, sy, r, r);

    //this.pz = this.z;

    // noStroke();
    // strokeWeight(1);
    // line(this.px, this.py, sx, sy);
    pop();
  }
}

class DarkStar extends ShootingStar {
  constructor() {
    super();
    this.size = 100;
    this.color = {
      h: 250,
      s: 0,
      l: 0,
      a: 0.25,
    }
  }

  display() {
    push();
    // rotate(this.angle);
    let c = this.color;
    fill(c.h, c.s, c.l, c.a);
    // noStroke();

    var sx =
      map(this.x / this.z, 0, 1, 0, windowWidth) +

      random(-this.variance, this.variance);
    var sy =
      map(this.y / this.z, 0, 1, 0, windowHeight) +
      random(-this.variance, this.variance);

    var r = map(this.z, width, 0, 1, 12);
    ellipse(sx, sy, this.size, this.size);

    this.pz = this.z;

    noStroke();
    strokeWeight(1);
    line(this.px, this.py, sx, sy);
    pop();
  }
}