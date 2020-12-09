/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

const nestedArrMax = (arr) => {
  if (!arr.length) return undefined;
  return Math.max(...arr.flat(Infinity));
};
//console.log(nestedArrMax([1, [3, [10], 6]]));

/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {
  if (!arr.length) return undefined;
  let count = 1;
  while (count < level) {
    arr = arr.flat();
    count++;
  }
  console.log(arr);
  arr = arr.filter((el) => !Array.isArray(el));
  return Math.max(...arr);
};

console.log(nestedArrMaxLevel([1, [2, 5, [10]]], 2));

module.exports = { nestedArrMax, nestedArrMaxLevel };
