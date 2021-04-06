const maxSubarray = (arr) => {
  let currSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
    } else {
      currSum += arr[i];
    }
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
console.log(maxSubarray([15, 20, -5, 10]));

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  let currMax = 0;
  let globalMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(arr[i], currMax + arr[i]);
    if (currMax > globalMax) globalMax = currMax;
  }
  return globalMax;
};
