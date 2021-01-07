class DarkStarField {
  constructor(qty) {
    this.stars = [];
    this.addStars(qty);
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

  addStars(qty) {
    for (let i = 0; i < qty; i++) {
      let star = new DarkStar();
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