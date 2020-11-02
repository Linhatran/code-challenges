function findPairForSum(array, target) {
  //loop through array 
    //loop through the remaining 
    //if num from inside loop + num from outside loop = target, return them
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i],array[j]]
      }
    }
  }
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 38);
console.log(pair); // --> [4, 5]



function findLargestSum(arr) {
  let biggest = arr[0];
  let second = arr[1];
  if (arr.length < 2) return biggest;

  if (biggest < second) {
    biggest = arr[1];
    second = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (biggest < arr[i]) {
      second = biggest;
      biggest = arr[i];
    } else if (second < arr[i]) {
      second = arr[i];
    }
  }
  return biggest + second;
}
//console.log(findLargestSum([4, 6, 123, 78, 4, 67, 37, 9])); //201
