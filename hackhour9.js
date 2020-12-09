/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/

const retrieveDepth = (arr, depth, depthLevel = 0) => {
  let result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      depthLevel += 1;
      if (depthLevel === depth) {
        return result;
      } else {
        result.push(...retrieveDepth(el, depth, depthLevel));
      }
    } else {
      result.push(el);
    }
  });
  return result;
};

const retrieveDepth = (arr, depth) => {
  let result = [];
  const process = (arr, depth) => {
    if (depth === 0) return ;
    arr.forEach(item => {
      if (!Array.isArray(item)) {
        result.push(item)
      } else {
        process(item, depth-1)
      }
    })
  }
  process(arr, depth)
  return result;
};
//console.log(retrieveDepth([2, [4, [7], 1], 5], 3));
/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

const flattenDepth = (arr, depth, depthLevel = 0) => {
  if (depth === 0) return arr;
  let result = [];
  arr.forEach((item) => {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      depthLevel += 1;
      if (depthLevel === depth + 1) {
        return result.push(item);
      } else {
        result = result.concat(flattenDepth(item, depth, depthLevel));
      }
    }
  });
  return result;
};
console.log(flattenDepth([2, [4, [7], 1], 5], 1));
module.exports = { retrieveDepth, flattenDepth };
