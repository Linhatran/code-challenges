function createArray() {
  //CODE HERE
  this.array = [];
}
createArray.prototype.push = function (val) {
  this.array[this.array.length] = val;
  return this.array;
};

createArray.prototype.pop = function () {
  let lastValue = this.array[this.array.length - 1];
  this.array.length = this.array.length - 1;
  return lastValue;
};

createArray.prototype.shift = function () {
  let firstValue = this.array[0];
  for (let i = 1; i < this.array.length; i++) {
    const currentValue = this.array[i];
    this.array[i - 1] = currentValue;
  }
  this.array.length = this.array.length - 1;
  return firstValue;
};
createArray.prototype.unshift = function (val) {
  this.array.length = this.array.length + 1;
  for (let i = this.array.length - 1; i > 0; i--) {
    const newValue = this.array[i - 1];
    this.array[i] = newValue;
  }
  this.array[0] = val;
  return this.array;
};
let array = new createArray();
