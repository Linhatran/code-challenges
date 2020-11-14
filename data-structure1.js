/** Class representing a Stack. */

class Stack { 

  constructor() {
    this._storage = {}; //internal property so cannot do myStack._storage, can only do .push, .pop, etc.
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) { //constant time operation only, no shifting
    this._storage[value] = value;
    return Object.values(this._storage);
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() { //constant time operation only, no shifting
    const length = Object.values(this._storage).length;
    const last = Object.values(this._storage)[length-1];
    delete this._storage[last]
    return last;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() { //constant time operation only, no shifting
     const length = Object.values(this._storage).length;
    const last = Object.values(this._storage)[length-1];
    return last;
  }
}

const myStack = new Stack();

console.log(myStack.push(2))
console.log(myStack.push(99))
console.log(myStack.pop())
console.log(myStack.push(45))
console.log(myStack.push(23))
console.log(myStack.push(7))
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.push(4))
console.log(myStack.peek())
