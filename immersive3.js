function Queue() {
  this.storage = {};
  this.index = 0;
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index++;
  return this.storage;
};
Queue.prototype.dequeue = function () {
  if (Object.keys(this.storage).length === 0) return undefined;

  const first = this.storage[0];
  for (let i = 1; i < this.index; i++) {
    const current = this.storage[i]; //1234 /   [1,2,3]
    this.storage[i - 1] = current; //0: 1234  /
  }
  this.index--; // {0: 1234, 1:[1,2,3], 2:[1,2,3]}
  delete this.storage[this.index];
  return first;
};

const myQueue = new Queue();

myQueue.enqueue('puppy');
myQueue.enqueue(1234);
myQueue.enqueue([1, 2, 3]);

// {0:'puppy, 1: 1234, 2: [1, 2, 3]}
console.log(myQueue.dequeue()); // puppy
console.log(myQueue.storage); // {0: 1234, 1: [1,2,3]}
console.log(myQueue.dequeue()); // 1234
console.log(myQueue.storage); // {0: [1,2,3]}
console.log(myQueue.dequeue());
console.log(myQueue.storage);
console.log(myQueue.dequeue());
console.log(myQueue.storage);
