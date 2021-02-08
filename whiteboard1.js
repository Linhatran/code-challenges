Given a circular linked list, implement an algorithm which returns the node at the beginning of a loop.
Example: A -> B -> C -> D -> E -> C    (answer is C)
 
function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const list = new LinkedList();
list.head = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeC;
function getNode (list) {
  // initialize a cache for value of each node traversed
  const cache = {};
  // initialize a variable to keep track of the head while traversing
  let current = list.head;
  // while loop to traverse 
  while (current.next) {
  // if value is not in cache, save value to cache
  if (!cache[current.value]) {
    cache[current.value] = true;
    current = current.next;
  // if value is in cache, return that node
  } else return current;
  }
}
console.log(getNode(list))
