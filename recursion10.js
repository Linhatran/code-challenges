function findInOrderedSet(arr, target) {
	//base case target = arr[0] return true
  if (!arr.length) return false;
  if (arr[0] === target) return true;
  return findInOrderedSet(arr.slice(1), target)
}
<------------------------------------------------------>
function findInOrderedSet(arr, target) {
	let min = 0;
  let max = arr.length-1;
  
  while (min <= max) {
    let guess = Math.floor((max + min)/2)
    if (arr[guess] === target) {
      return true;
    } else {
      if (arr[guess] > target) {
        max = guess - 1;
      } else {
        min = guess + 1;
      }
    }
  }
  return false
}
const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 9));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false


const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 9));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false
