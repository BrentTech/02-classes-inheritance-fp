'use strict';

const FlyV = require('../lib/flying-vehicle-class');
const FlyV2= require('../lib/flying-vehicle-constructor');
const FlyV3= require('../lib/flying-vehicle-factory');

describe('Flying vehicles', () => {

  describe('Airplanes', () => {
    
    let airplane = new FlyV.Airplane('F14');
    let airplane2 = new FlyV2.Airplane('Fedex Cargo');
    let airplane3 = new FlyV3.Airplane('Paper');

    it('can swim', () => {
      expect(airplane.fly()).toBeTruthy();
      expect(airplane2.fly()).toBeTruthy();
      expect(airplane3.fly()).toBeTruthy();
    });
    it('tastes good', () => {
      expect(airplane.wingThings).toEqual(2);
      expect(airplane2.wingThings).toEqual(2);
      expect(airplane3.wingThings).toEqual(2);
    });
    it('is caught with a hook', () => {
      expect(airplane.land).toBeTruthy();
      expect(airplane2.land).toBeTruthy();
      expect(airplane3.land).toBeTruthy();
    });
  });

  describe('Helicopters', () => {
  
    let helicopter = new FlyV.Helicopter('Parent');
    let helicopter2 = new FlyV2.Helicopter('Chinook');
    let helicopter3 = new FlyV3.Helicopter('');
  
    it('can swim', () => {
      expect(helicopter.land()).toBeTruthy();
      expect(helicopter2.land()).toBeTruthy();
      expect(helicopter3.land()).toBeTruthy();
    });
    it('tastes good', () => {
      expect(helicopter.wingThings).toEqual(4);
      expect(helicopter2.wingThings).toEqual(4);
      expect(helicopter3.wingThings).toEqual(4);
    });
    it('is caught with a hook', () => {
      expect(helicopter.fly).toBeTruthy();
      expect(helicopter2.fly).toBeTruthy();
      expect(helicopter3.fly).toBeTruthy();
    });
    it('is totally crashed', () => {
      expect(helicopter.blackhawk).toBeTruthy();
      expect(helicopter2.blackhawk).toBeTruthy();
      expect(helicopter3.blackhawk).toBeTruthy();
    });
  });
});
