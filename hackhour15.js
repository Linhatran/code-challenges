
const bstMinMax = (root) => {
  //determin min
  let rootMax = root;
  let min;
  while (root.left) {
    root = root.left;
  }
  min = root.value;
  //determin max
  let max;
  while (rootMax.right) {
    rootMax = rootMax.right;
  }
  max = rootMax.value;
  //find difference
  return max - min;
};

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (root, p, q) => {
  if (p.value < root.value && q.value < root.value) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.value > root.value && q.value > root.value) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
