function findInOrderedSet(arr, target) {
	//base case target = arr[0] return true
  if (!arr.length) return false;
  if (arr[0] === target) return true;
  return findInOrderedSet(arr.slice(1), target)
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 9));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false
