function getSecondLargest(arr) {
  let nums = [];
  let sorted = arr.sort((a,b) => b-a);
  let maxID = sorted.lastIndexOf(Math.max(...sorted));
  nums.push(sorted[maxID+1]);
  return nums;
}
console.log(getSecondLargest([1,4,8,934,9,4,634]))
