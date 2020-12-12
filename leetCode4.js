var twoSum = function(nums, target) {
   //create an empty cache
    const cache = {};
    const found = [];
    //loop through array
    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (cache[nums[i]]) return [i, nums.indexOf(difference)]
      cache[difference] = true;
    }
   return []
};

const threeSum = (arr, target) => {
  //make a copy because we dont want to modify input
  const copyArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < copyArr.length - 1; i++) {
    let j = i + 1;
    let k = copyArr.length - 1;
    while (j < k) {
      let sum = copyArr[i] + copyArr[j] + copyArr[k];
      if (sum === target) {
        return true;
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return false;
};
console.log(threeSum([1, 4, 7, 2, 9, 0], 19)); //false
console.log(threeSum([2, 5, 11, 15], 31)); //true
