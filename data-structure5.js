function BinarySearchTree(value) {
  this.value = value; //root
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function (val) {
  //declare a node to add to tree
  const leaf = new BinarySearchTree(val);
  //check if val is smaller than root/this.value
  if (val < this.value) {
    //check is this.left is null/available to assign
    if (this.left === null) {
      //if this.left is available, assign val to left node of root
      this.left = leaf;
    } else {
      //if this.left is not available, run recursion on this.left (assign this.left to be new "root node" and go back to the first if statement)
      this.left.add(val);
    }
  } else {
    //same as what we did for this.left
    this.right === null ? (this.right = leaf) : this.right.add(val);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  //check is the root value = value
  if (this.value === value) return true;
  //if value < this.value and this.left is not null (available)
  if (value < this.value && this.left) {
    //NEED TO RETURN the result of recursion on left node
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    //NEED TO RETURN the result of recursion on right node
    return this.right.contains(value);
  } else {
    //if cannot find value, return false
    return false;
  }
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function (callback) {
  callback(this.value);
  if (this.left) this.left.depthFirstPre(callback);
  if (this.right) this.right.depthFirstPre(callback);
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function (callback) {
  //check all the left side first and invoke callback on all left nodes
  if (this.left) {
    this.left.depthFirstIn(callback);
  }
  //apply call back on this.value
  callback(this.value);
  //check right node and invoke callback on all right nodes
  if (this.right) {
    this.right.depthFirstIn(callback);
  }
};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function (callback) {
  //traverse through all the left nodes till reach leaf node then invoke callback
  if (this.left) {
    this.left.depthFirstPost(callback);
  }
  //traverse through all the right nodes till reach leaf node then invoke callback
  if (this.right) {
    this.right.depthFirstPost(callback);
  }
  //invoke callback on root node
  callback(this.value);
};

//applies the callback in the order of breath first (level order)
// BinarySearchTree.prototype.breadthFirst = function (callback, queue = []) {
//   callback(this.value);
//   if (this.left) queue.push(this.left);
//   if (this.right) queue.push(this.right);
//   while (queue[0]) {
//     return queue.shift().breadthFirst(callback, queue);
//   }
// };

//------------ while loop without recursion ---------//
BinarySearchTree.prototype.breadthFirst = function (callback) {
  const queue = [];

  //push the root node to queue
  queue.push(this);
  //make sure queue is not empty
  while (queue[0]) {
    //declare curr and assign it the value of queue at 0 index
    const curr = queue.shift();
    //if left node or right node is not null, push them into queue
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);

    //call callback on the current node
    callback(curr.value);
  }
};
const tree = new BinarySearchTree(5);
tree.add(2);
tree.add(3);
tree.add(7);
tree.add(6);
const array = [];
const func = function (value) {
  array.push(value);
};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function () {
  const array = [];
  const func = function (value) {
    array.push(value);
  };
  this.depthFirstPre(func);
  return Math.min(...array);
};
// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function () {
  const array = [];
  const func = function (value) {
    array.push(value);
  };
  this.depthFirstPre(func);
  return Math.max(...array);
};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function () {};
console.log(tree.breadthFirst(func));
// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function (item) {};

//max method
BinarySearchTree.prototype.max = function () {
  //the max value will be the right most value, so we recursively invoke the function until right node is null, return value at that node
  return this.right === null ? this.value : this.right.max();
};
//min method
BinarySearchTree.prototype.min = function () {
  //the min value will be the left most value, so we recursively invoke the function until left node is null, return value at that node
  return this.left === null ? this.value : this.left.min();
};
