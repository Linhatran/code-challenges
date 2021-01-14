function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

// const bstSum = (root) => {
//   if (!root) {
//     return 0;
//   }
//   let sum = root.value;

//   if (root.left) {
//     sum += bstSum(root.left);
//   }
//   if (root.right) {
//     sum += bstSum(root.right);
//   }
//   return sum;
// };

const bstSum = (root) => {
  const leftVal = root.left ? bstSum(root.left) : 0;
  const rightVal = root.right ? bstSum(root.right) : 0;
  return root.value + leftVal + rightVal;
};

const tree = new BinarySearchTree(4);
tree.left = new BinarySearchTree(2);
tree.left.left = new BinarySearchTree(1);
tree.left.right = new BinarySearchTree(3);
tree.right = new BinarySearchTree(7);
tree.right.right = new BinarySearchTree(9);
tree.right.right.left = new BinarySearchTree(8);
console.log(bstSum(tree));
/*

Extension:
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

const bstReverse = (root) => {
  [root.left, root.right] = [root.right, root.left];
  if (root.left) bstReverse(root.left);
  if (root.right) bstReverse(root.right);
  return root;
};
//console.log(bstReverse(tree));
module.exports = { BinarySearchTree, bstSum, bstReverse };
