class blinker {
  constructor() {
    this.size = random(2.5, 5);
    this.glimmer = true;

    this.x = random(-windowWidth / 2, windowWidth / 2);
    this.y = random(-windowHeight / 2, windowHeight / 2);
    console.log(windowWidth, windowHeight);
    this.color = {
      h: 10,
      s: 30,
      l: 100,
      a: 1
    }

    let randomColor = Math.floor(random(0, 360));
    this.color.h = randomColor;

  }

  update() {


    if (this.glimmer) {
      this.size += 0.025;
      this.color.l += 1;
    } else {
      this.size -= 0.025;
      this.color.l -= 1;
    }

    if (this.size > 5 || this.size < 2.5) this.glimmer = !this.glimmer;


  }


  display() {
    noStroke();
    let c = this.color
    fill(c.h, c.s, c.l, c.a);
    ellipse(this.x, this.y, this.size, this.size);
  }
}