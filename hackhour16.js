/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 *
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (typeof k !== 'number' || !head) return undefined;
  const cache = [];
  //find the last node
  while (head.next) {
    cache.push(head.value);
    head = head.next;
  }
  cache.push(head.value);
  return cache[cache.length - k];
}
function kthToLastNode(k, head){
  if (k === 0 || head === undefined) return undefined
  let leadingNode = head
  let followingNode = head
  for (let i = 1; i < k; i += 1) {
    if (leadingNode.next === null) return undefined
    leadingNode = leadingNode.next
  }
  while(leadingNode.next !== null) {
    leadingNode = leadingNode.next
    followingNode = followingNode.next
  }
  return followingNode.value;
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(2, a));
