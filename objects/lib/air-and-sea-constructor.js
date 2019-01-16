'use strict';

const SeaCreature = function (name, edible) {
  this.name = name;
  this.edible = edible;
  this.catchWithHook = true;
};

SeaCreature.prototype.swim = () => {
  return 'Splish Splash!!!';
};

const Fish = function(name) {
  SeaCreature.call(this, name, true);
};

const Lobster = function(name) {
  SeaCreature.call(this, name, true);
  this.catchWithHook = false;
};

const Hoffa = function(name) {
  SeaCreature.call(this, name, false);
  this.teamster = true;
  this.catchWithHook = false;
};

Hoffa.prototype = new SeaCreature();
Fish.prototype = new SeaCreature();
Lobster.prototype = new SeaCreature();


module.exports = {Fish, Lobster, Hoffa};
