'use strict';

const Vehicle = () => ({
  drive() {
    return 'Moving Forward';
  },
  stop() {
    return 'Stopping';
  },
});

function carFactory(name) {

  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehicle()
  );

  return car;
}

function motorcycleFactory(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie},
    Vehicle()
  );

  function wheelie() {
    return 'Wheee!';
  }

  return motorcycle;
}

let Car = carFactory;
let Motorcycle = motorcycleFactory;

module.exports = {Car, Motorcycle};


