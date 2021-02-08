function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
const tree = new BinarySearchTree(4);
tree.right = new BinarySearchTree(7);
tree.left = new BinarySearchTree(2);
tree.left.left = new BinarySearchTree(1);
tree.left.right = new BinarySearchTree(3);
tree.right.right = new BinarySearchTree(9);
tree.right.right.left = new BinarySearchTree(8);
/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

          4
        /   \
       2      7
      / \       \
    1   3        9
                /
              8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

// const bstHeight = (root, height = 0) => {
//   if (!root.left && !root.right) return height;
//   let lHeight = 0;
//   let rHeight = 0;
//   if (root.left) {
//     height += 1;
//     lHeight = bstHeight(root.left, height);
//     height -= 1;
//   }
//   if (root.right) {
//     height += 1;
//     rHeight = bstHeight(root.right, height);
//   }
//   return Math.max(lHeight, rHeight);
// };
const bstHeight = (root) => {
  if (!root) return -1;
  const leftHeight = bstHeight(root.left);
  const rightHeight = bstHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}
//console.log(bstHeight(tree));
/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

const superbalanced = (tree) => {
  // return true if tree is empty
  if (tree === null) return true;
  return (superbalanced(tree.left) 
      && superbalanced(tree.right) 
      && Math.abs(bstHeight(tree.left) - bstHeight(tree.right)) <= 1)
};


console.log(superbalanced(tree))

module.exports = { BinarySearchTree, bstHeight, superbalanced };
