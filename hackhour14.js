function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = null;

const reverseLinkedList = (head) => {
  if (!head) return null;
  // //APPROACH 1: in place

  // let current = head;
  // let next = null;
  // let previous = null;
  // while (current) {
  //   next = current.next;
  //   current.next = previous;
  //   previous = current;
  //   current = next;
  // }
  // return previous;

  // // APPROACH 2: using stack
  const stack = [];
  let current = head;
  while (current) {
    stack.push(current.value);
    current = current.next;
  }
  let newHead = new Node(stack.pop());
  let curr = newHead;
  while (stack.length) {
    curr.next = new Node(stack.pop());
    curr = curr.next;
  }
  return newHead;
};
console.log(reverseLinkedList(head));
module.exports = { Node, reverseLinkedList };
