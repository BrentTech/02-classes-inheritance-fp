'use strict';

class SeaCreature {
  constructor(name, edible) {
    this.name = name;
    this.edible = edible;
    this.catchWithHook = true;
  }

  swim() {
    return 'Splish Splash!!!';
  }
}

class Fish extends SeaCreature {
  constructor(name, edible) {
    super(name, true);
  }
}

class Lobster extends SeaCreature {
  constructor(name, edible) {
    super(name, true);
    this.catchWithHook = false;
  }
}

class Hoffa extends SeaCreature {
  constructor(name, edible) {
    super(name, false);
    this.Teamster = true;
    this.catchWithHook = false;
  }
}

module.exports = {Fish, Lobster, Hoffa}