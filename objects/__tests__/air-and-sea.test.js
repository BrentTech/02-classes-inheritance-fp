'use strict';

const SeaAndAir = require('../lib/air-and-sea-constructor.js');
const SeaAndAir3 = require('../lib/air-and-sea-factory');
const SeaAndAir2 = require('../lib/air-and-sea-class');

describe('Sea Creatures', () => {

  describe('Fish', () => {
    
    let fish = new SeaAndAir.Fish('Salmon');
    let fish2 = new SeaAndAir2.Fish('Tuna');
    let fish3 = new SeaAndAir3.Fish('Goldfish');

    it('can swim', () => {
      expect(fish.swim()).toBeTruthy();
      expect(fish2.swim()).toBeTruthy();
      expect(fish3.swim()).toBeTruthy();
    });
    it('tastes good', () => {
      expect(fish.edible).toEqual(true);
      expect(fish2.edible).toEqual(true);
      expect(fish3.edible).toEqual(true);
    });
    it('is caught with a hook', () => {
      expect(fish.catchWithHook).toEqual(true);
      expect(fish2.catchWithHook).toEqual(true);
      expect(fish3.catchWithHook).toEqual(true);
    });
  });

  describe('Lobster', () => {
  
    let lobster = new SeaAndAir.Lobster('Big Blue');
    let lobster2 = new SeaAndAir2.Lobster('Lil Red');
    let lobster3 = new SeaAndAir3.Lobster('Rainbow Sparkle!');
  
    it('can swim', () => {
      expect(lobster.swim()).toBeTruthy();
      expect(lobster2.swim()).toBeTruthy();
      expect(lobster3.swim()).toBeTruthy();
    });
    it('tastes good', () => {
      expect(lobster.edible).toEqual(true);
      expect(lobster2.edible).toEqual(true);
      expect(lobster3.edible).toEqual(true);
    });
    it('is caught with a hook', () => {
      expect(lobster.catchWithHook).toEqual(false);
      expect(lobster2.catchWithHook).toEqual(false);
      expect(lobster3.catchWithHook).toEqual(false);
    });
  });

  describe('Jimmy Hoffa', () => {
    
    let hoffa = new SeaAndAir.Hoffa('Jimmy');
    let hoffa2 = new SeaAndAir2.Hoffa('Jim');
    let hoffa3 = new SeaAndAir3.Hoffa('The Hoff');
    
    it('can swim', () => {
      expect(hoffa.swim()).toBeTruthy();
      expect(hoffa2.swim()).toBeTruthy();
      expect(hoffa3.swim()).toBeTruthy();
    });
    it('tastes good', () => {
      expect(hoffa.edible).toEqual(false);
      expect(hoffa2.edible).toEqual(false);
      expect(hoffa3.edible).toEqual(false);
    });
    it('is caught with a hook', () => {
      expect(hoffa.catchWithHook).toEqual(false);
      expect(hoffa2.catchWithHook).toEqual(false);
      expect(hoffa3.catchWithHook).toEqual(false);
    });
  });

});
