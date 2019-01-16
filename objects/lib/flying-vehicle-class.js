'use strict';

class FlyingVehicle {
  constructor(name, wingThings) {
    this.name = name;
    this.wingThings = wingThings;
  }
  fly() {
    return 'Like an Eagle!';
  }
  land() {
    return 'Very fast - or - Safetly?';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super(name, 4);
  }

  blackhawk() {
    return 'down!';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super(name, 2);
  }
}

module.exports = {Helicopter, Airplane};
