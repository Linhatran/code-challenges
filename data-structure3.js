function LinkedList(...nums) {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.back = null;
}
//add a new node to the end of the list
LinkedList.prototype.push = function (value) {
  const node = new Node(value);
  //if our obj is empty, we wont have head or tail so assign them both to node
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    //if obj is not empty, point the tail to node and assign tail
    this.tail.next = node;
    //point the second to last node (prev tail) to node
    this.tail = node;
  }
  return this.head;
};

// returns true if value is present in the list
LinkedList.prototype.contains = function (val) {
  let currentNode = this.head;
  //checking if we reach the inner most node
  while (currentNode.value !== val) {
    if (currentNode.next === null) return false;
    currentNode = currentNode.next;
  }
  return true;
  // return currentNode.value === val;

  // --------- recursive solution -------///
  // //in param, initialize node = this.head
  // //base case
  // //if val = node.value => true
  // if (node.value === val) return true;
  // //if !node.next => false
  // if (!node.next) return false;
  // //recursive case
  // //node = node.next
  // return this.contains(val, node.next);
};
// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function (value) {
  const node = new Node(value);
  node.next = this.head;
  this.head = node;
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function (value, position) {
  const node = new Node(value);
  if (position === 0) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  //get the node before the position, assign it first value to this.head to traverse
  let nodeBeforePosition = this.head;
  //traverse through the list to get the node before the position
  for (let i = 0; i < position - 1; i++) {
    nodeBeforePosition = nodeBeforePosition.next;
  }
  //get the current node at position
  const currentNode = nodeBeforePosition.next;
  //point the node before position to the new node
  nodeBeforePosition.next = node;
  //point the new node.next to the current node at positon
  node.next = currentNode;
};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function (value) {
  let current = this.head;
  let beforeCurrentNode;
  while (current.value !== value) {
    beforeCurrentNode = current;
    current = current.next;
  }
  beforeCurrentNode.next = current.next;
};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) {
  let nodeBeforePosition = this.head;
  for (let i = 0; i < position - 1; i++) {
    nodeBeforePosition = nodeBeforePosition.next;
  }
  const currentNode = nodeBeforePosition.next;
  nodeBeforePosition.next = currentNode.next;
};
const list = new LinkedList();
list.push(3);
list.push(7);
list.push(6);
list.push(4);
console.log(list.contains(9));

/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};
const list = new DoublyLinkedList();

list.add(3);
list.add(5);
list.add(7);

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if (!val) return undefined;
  let prevNode = this.head;
  let currentNode = this.head;
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  if (this.tail.val === val) {
    prevNode = this.tail.prev;
    prevNode.next = null;
    this.tail = prevNode;
    return;
  }
  while (currentNode.val !== val) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  prevNode.next = currentNode.next;
  currentNode.next.prev = prevNode;
};

module.exports = { DoublyLinkedList, Node };

