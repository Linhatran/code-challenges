// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

//{ 0: 'chicken', 1: 45, 2: [3,4], 3: 'tacos'}
Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
  return this.storage;
};

Stack.prototype.pop = function () {
  const last = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return last;
};
const myStack = new Stack();
const yourStack = new Stack();
console.log(myStack.push(2));
console.log(myStack.push('tacos'));
console.log(myStack.push(4));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.storage);
