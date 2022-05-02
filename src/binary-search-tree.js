const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.roote = null;
  }

  root() {
    return this.roote;
  }

  add(val) {

    const addValue = (node,x) => {

        if (!node) {
            return {
                data: x,
                left: null,
                right: null,
            };
        }

        const newLeft = x > node.data ? node.left : addValue(node.left, x);
        const newRight = x < node.data ? node.right : addValue(node.right, x);

        return {
            data: node.data,
            left: newLeft,
            right: newRight
        };
    };

    this.roote = addValue(this.roote, val);
  }

  has(val) {
    const check = (node, x) => {
        if (!node) { return false; }
        if (node.data === x) { return true; }
        if (x < node.data) {
          return node.left ? check(node.left, x) : false;
        }
        if (x > node.data) {
          return node.right ? check(node.right, x) : false;
        }
      }
      return check(this.roote, val);
    }

    find(val) {
      const check = (node, x) => {
      if (!node) { return null; }
      if (node.data === x) { return node; }
      if (x < node.data) {
        return node.left ? check(node.left, x) : null;
      }
      if (x > node.data) {
        return node.right ? check(node.right, x) : null;
      }
    };
    return check(this.roote, val);
  }

  leftPlusRight(source, item) {
    if (!source) { return item; }
    if (!item) { return source; }
    if (source.right) {
        return {
            data: source.data,
            left: source.left,
            right: this.leftPlusRight(source.right, item)
        };
    } else {
        return {
            data: source.data,
            left: source.left,
            right: item
        };
    }
  }

  remove(val) {
    const removeNode = ( node, x ) => {
        console.log(node);
        console.log(!node);
        if (!node) {
            return null;
        }
        if (node.data === x) {
            return this.leftPlusRight(node.left, node.right);
        }
        if ( x < node.data) {
            return {
                data: node.data,
                left: removeNode(node.left, x),
                right: node.right
            };
        }
        if ( x > node.data) {
            return {
                data: node.data,
                left: node.left,
                right: removeNode(node.right, x)
            };
        }
    };
    this.roote = removeNode(this.roote, val);
  }

  min() {
    const checkMin = (node) => {
      if (!node) { return null; }
      if (!node.left) { return node.data; }
      return checkMin(node.left);
    };
    return checkMin(this.roote);
  }

  max() {
    const checkMax = (node) => {
      if (!node) { return null; }
      if (!node.right) { return node.data; }
      return checkMax(node.right);
    };
    return checkMax(this.roote);
  }
}

module.exports = {
  BinarySearchTree
};