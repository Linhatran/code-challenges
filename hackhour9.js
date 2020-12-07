const maxDepth = (arr) => {
  //declare a local depth var 
  let count = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      count += Math.max(maxDepth(item), count)
    } 
  }
  //return local depth plus 1 to account for current array
  return count + 1;
}
console.log(maxDepth([3,[4,[6],[7,0]]]));
