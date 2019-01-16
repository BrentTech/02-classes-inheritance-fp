'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {
  describe('Instantiate List', () => {
    it('starts with a length of -1 and an empty data set', () => {
      let stuff = new List();
      expect(stuff.length).toEqual(0);
      expect(stuff.data).toEqual({});
    });
  });
  describe('Push', () => {
    it('pushes items to the end of the data set', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      expect(stuff.length).toEqual(2);
      expect(stuff.data[1]).toEqual('b');
    });
  });
  describe('Pop', () => {
    it('pushes items to the end of the data set', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.pop();
      expect(stuff.length).toEqual(1);
      expect(stuff.data[0]).toEqual('a');
    });
  });
  describe('Shift', () => {
    it('pushes items to the end of the data set', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.shift();
      expect(stuff.length).toEqual(1);
      expect(stuff.data[0]).toEqual('b');
    });
  });
  describe('Unshift', () => {
    it('pushes items to the end of the data set', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      stuff.unshift('c');
      expect(stuff.length).toEqual(3);
      expect(stuff.data[1]).toEqual('a');
      expect(stuff.data[0]).toEqual('c');
    });
  });
  // describe('Pop', () => {
  //   it('pushes items to the end of the data set', () => {
  //     let stuff = new List();
  //     stuff.push('a');
  //     stuff.push('b');
  //     expect(stuff.length).toEqual(2);
  //     expect(stuff.data[1]).toEqual('b');
  //   });
  // });
});
