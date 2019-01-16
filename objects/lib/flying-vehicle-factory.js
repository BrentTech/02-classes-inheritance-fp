'use strict';

const FlyingVehicle = () => ({
  fly() { return 'Like an Eagle!'; },
  land() { return 'Very fast - or - Safetly?'; },
});

function airplaneFactory(name) {
  let airplane = Object.assign(
    {},
    {name},
    {wingThings: 2},
    FlyingVehicle(),
  );
  return airplane;
}

function helicopterFactory(name) {
  let helicopter = Object.assign(
    {},
    {name},
    {wingThings: 4},
    {blackhawk},
    FlyingVehicle(),
  );

  function blackhawk() { return 'down!'; }

  return helicopter;
}

let Airplane = airplaneFactory;
let Helicopter = helicopterFactory;

module.exports = {Airplane, Helicopter};
