'use strict';

const FlyingVehicle = function(name, wingThings) {
  this.name = name;
  this.wingThings = wingThings;
};

FlyingVehicle.prototype.fly = () => {
  return 'Like an Eagle!';
};

FlyingVehicle.prototype.land = () => {
  return 'Very fast - or - Safetly?';
};

// Car Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 2);
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 4);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.blackhawk = () => {
  return 'down!';
};

module.exports = {Airplane, Helicopter};
