'use strict';

const SeaCreatures = () => ({
  swim() {
    return 'Splish Splash!!!';
  },
});

function fishFactory(name) {
  let fish = Object.assign(
    {},
    {name},
    {edible: true},
    {catchWithHook: true},
    SeaCreatures(),
  );

  return fish;
}

function lobsterFactory(name) {
  let lobster = Object.assign(
    {},
    {name},
    {edible: true},
    {catchWithHook: false},
    SeaCreatures(),
  );

  return lobster;
}

function hoffaFactory(name) {
  let hoffa = Object.assign(
    {},
    {name},
    {edible: false},
    {catchWithHook: false},
    {teamster: true},
    SeaCreatures(),
  );

  return hoffa;
}

let Fish = fishFactory;
let Lobster = lobsterFactory;
let Hoffa = hoffaFactory;

module.exports = {Fish, Lobster, Hoffa};
