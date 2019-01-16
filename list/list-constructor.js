'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let rValue = this.data[0];
  delete this.data[0];
  this.length--;
  for(let i = 0; i < this.length; i++) {
    this.data[i] = this.data[i + 1];
  }
  return rValue;
};

List.prototype.unshift = function(item) {
  this.push(item);
  for(let i = 0; i < this.length; i++) {
    this.data[this.length - i] = this.data[this.length - 1 - i];
  }
  this.data[0] = item;
};

List.prototype.slice = function(start, end) {
  let newList = new List();
  for(let i = 0; i < this.length; i++) {
    if(i >= start && i <= end) {
      newList.push(this.data[i]);
    }
  }
  return newList;
},

List.prototype.splice = function() {
  
},


module.exports = List;
