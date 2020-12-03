const mergeRanges = (intervals) => {
  //sort the array based on first item of each interval
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  //declare an empty array to save final result
  const result = [];
  //loop through the sorted array
  for (let i = 0; i < sorted.length; i++) {
    let current = sorted[i];
    //access the last item in result array
    let lastItemInResult = result[result.length - 1];
    //if there result array is empty or the second value in the last interval in result is less than the first value of current interval in sorted array (not overlapping)
    if (!result.length || lastItemInResult[1] < current[0]) {
      //push current interval in result
      result.push(current);
    } else {
      //if overlapped, change the second value of last interval in result to be the end of greater interval
      lastItemInResult[1] = Math.max(lastItemInResult[1], current[1]);
    }
  }
  return result;
};

console.log(
  mergeRanges([
    [0, 1],
    [3, 5],
    [4, 8],
    [10, 12],
    [9, 10],
    [4, 9],
  ])
);
