class ConstellationSystem {
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
    this.constellationSets.forEach(constellation => {
      constellation.update();
    })

  }

  display() {
    this.constellationSets.forEach(constellation => {
      constellation.display();
    })
  }
}