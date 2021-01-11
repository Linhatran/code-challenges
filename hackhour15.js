
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
