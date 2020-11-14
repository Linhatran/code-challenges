/** Class representing a Queue. 
 * @constructor
*/

class Queue {

  constructor() {
    this._storage = {};
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    this._storage[value] = value;
    return Object.values(this._storage);
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    const first = Object.keys(this._storage)[0];
    delete this._storage[first];
    return first;
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    const first = Object.keys(this._storage)[0];
    return first;
  }
}
const myQueue = new Queue;
console.log(myQueue.enqueue(3))
console.log(myQueue.enqueue(9))
console.log(myQueue.enqueue(7))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.enqueue(34))
