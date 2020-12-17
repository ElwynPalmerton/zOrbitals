class ShootingStarField {
  constructor(qty) {

    this.stars = [];

    for (let i = 0; i < qty; i++) {
      let star = new ShootingStar();
      this.stars.push(star);
    }
  }

  update() {
    this.stars.forEach(star => {
      star.update();
    });
  }
  display() {
    this.stars.forEach(star => {
      star.display();
    });
  }
}

class DarkStarField {
  constructor(qty) {
    this.stars = [];

    for (let i = 0; i < qty; i++) {
      let star = new DarkStar();
      this.stars.push(star);
    }
  }

  changeColor(color) {
    console.log('changing darkstar color to: ', color)
    this.stars.forEach(star => {
      star.color.h = color.h;
      star.color.s = color.s;
      star.color.l = color.l;
      star.color.a = color.a;
    })
  }

  update() {
    this.stars.forEach(star => {
      star.update();
    });
  }

  display() {
    this.stars.forEach(star => {
      star.display();
    });
  }
}

class ShootingStar {
  constructor(color = { h: 201, s: 100, l: 70, a: 1, }) {
    this.x = random(-windowWidth / 2, windowWidth / 2);
    this.y = random(-windowHeight / 2, windowHeight / 2);
    this.z = random(windowWidth);
    //this.px = random(-width / 2, width / 2);
    //this.py = random(-height / 2, height / 2);

    this.pz = this.z;
    this.variance = 0;
    this.sx;
    this.sy;

    this.size = 0;
    this.angle = 0;

    color = {
      h: 201,
      s: 100,
      l: 70,
      a: 1,
    }

    this.color = color
  }//

  calculateStarLocation() {
    this.z = this.z - speed * 0.3;
    if (this.z < 90) {
      this.z = windowWidth;
      this.x = random(-windowWidth / 4, windowWidth / 4);
      this.y = random(-windowHeight / 4, windowHeight / 4);
      this.pz = this.z;
    }

    this.sx =
      map(this.x / this.z, 0, 1, 0, windowWidth) +
      //This is where I should modify the startfield.
      random(-this.variance, this.variance);
    this.sy =
      map(this.y / this.z, 0, 1, 0, windowHeight) +
      random(-this.variance, this.variance);
  }

  update(rotation) {
    //Passing a rotation variable into rotate only rotates the Starfield stars because the DarkStars have their own Context in their display method.
    this.angle += rotation;
    this.calculateStarLocation();
    this.size = map(this.z, windowWidth, 0, 1, 12);
  }


  display() {
    push();
    rotate(this.angle);
    //
    fill(this.color.h, this.color.s, this.color.l, this.color.a);
    // noStroke();
    ellipse(this.sx, this.sy, this.size, this.size);
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

  update(rotation) {
    //Passing a rotation variable into rotate only rotates the Starfield stars because the DarkStars have their own Context in their display method.
    this.calculateStarLocation();
  }
}