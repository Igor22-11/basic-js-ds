const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const func = (prev,key) => {
    if (prev .value !== k && prev.next !== null) {
      return {
        value: prev.value,
        next: func(prev.next)
      };
    }
    if (prev.value === k && prev.next !== null) {
      return func(prev.next);
    }
    if (prev.value !== k && prev.next === null) {
      return {
        value: prev.value,
        next: null
      };
    }
    if (prev.value === k && prev.next === null) {
      return null;
    }
  }
  return func(l,k);
}

module.exports = {
  removeKFromList
};
