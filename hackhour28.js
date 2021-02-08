function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/
const tree = new BinarySearchTree(4);
tree.left = new BinarySearchTree(2);
tree.left.left = new BinarySearchTree(1);
tree.left.right = new BinarySearchTree(3)
tree.right = new BinarySearchTree(7);
tree.right.right = new BinarySearchTree(9);
tree.right.right.left = new BinarySearchTree(8);
const bstReverse = (root) => {
  if (!root) return undefined;
  if (root.left) bstReverse(root.left);
  if (root.right) bstReverse(root.right);
  [root.left, root.right] = [root.right, root.left]
  return root
};
console.log(bstReverse(tree))
/*

Extension:

Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Ex:

Given the sorted array: [0, 3, 4, 6, 8, 9], the output is:

     6 
   /   \
  3     9
 / \   /
0   4 8

Whenever you have two elements in the middle like [1, 4, 7, 8], always
prioritize the rightmost value to place at the top of the tree/subtree,
giving us:

    7
   / \
  4   8
 /
1

(i.e. choose the 7 over the 4 to place at the top of the entire tree, and then
the 4 over the 1 to place at the top of the left subtree. Hint: look up the
Math.ceil function)

*/
//recursively choose root and modify array

const sortedArrayToBST = (arr) => {
  if (!arr.length) return undefined;
  const rootIndex = Math.ceil((arr.length - 1) / 2);
  const root = arr[rootIndex];
  const tree = new BinarySearchTree(root);
  const leftArr = arr.slice(0, rootIndex); //[4,1]
  const rightArr = arr.slice(rootIndex + 1); //[8]
  tree.left = leftArr.length ? sortedArrayToBST(leftArr) : null;
  tree.right = rightArr.length ? sortedArrayToBST(rightArr) : null;
  return tree;
};
// console.log(sortedArrayToBST([0, 3, 4, 6, 8, 9]));
//console.log(sortedArrayToBST([1, 4, 7, 8]));

module.exports = { BinarySearchTree, bstReverse, sortedArrayToBST };
