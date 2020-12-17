class constellationSystem {
  constructor() {

    this.i = 0;
    this.constellationSets = [];
  }

  addConstellation() {
    let constellation = new Constellation(this.i);
    this.constellationSets.push(constellation);
    this.i++
    if (this.i > sequenceAttractors.length - 1)
      this.i = 0;
  }

  update() {
    for (let i = 0; i < this.constellationSets.length; i++) {
      this.constellationSets[i].update();
    }

  }

  display() {
    for (let i = 0; i < this.constellationSets.length; i++) {
      this.constellationSets[i].display();
    }
  }
}