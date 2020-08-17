class Blinker {
  constructor() {
    this.angle = 0;
    this.size = random(2.5, 5);
    this.glimmer = true;

    this.x = random(-windowWidth / 2, windowWidth / 2);
    this.y = random(-windowHeight / 2, windowHeight / 2);
    this.color = {
      h: 10,
      s: 30,
      l: 100,
      a: 1
    }

    let randomColor = Math.floor(random(0, 50));
    this.color.h = randomColor;
  }

  update() {
    this.angle += 0.001;
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
    push();

    //rotate(this.angle);
    noStroke();
    let c = this.color
    fill(c.h, c.s, c.l, c.a);

    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}