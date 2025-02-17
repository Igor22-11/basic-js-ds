const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.Stack = [];
}

push(element) {
  this.Stack.push(element);
}

pop() {
  const peekElem = this.Stack.length ? this.Stack[this.Stack.length - 1] : 1;
  if (this.Stack.length) {
    this.Stack.pop();
  }
  return peekElem;
}

peek() {
  return this.Stack.length ? this.Stack[this.Stack.length - 1] : 1;
}
}

module.exports = {
  Stack
};
