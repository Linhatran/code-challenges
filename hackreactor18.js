function findPairForSum(array, target) {
  //loop through array 
    //loop through the remaining 
    //if num from inside loop + num from outside loop = target, return them
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i],array[j]]
      }
    }
  }
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 38);
console.log(pair); // --> [4, 5]
