'use strict';


// const Vehicle = require('./lib/vehicle-constructor.js');
// const Vehicle = require('./lib/vehicle-class.js');
const Vehicle = require('./lib/vehicle-factory.js');

// const SeaAndAir = require('./lib/air-and-sea-constructor.js');
// const SeaAndAir = require('./lib/air-and-sea-class.js');
const SeaAndAir = require('./lib/air-and-sea-factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

const salmon = new SeaAndAir.Fish('Salmon');
console.log(salmon.name, salmon.swim());