/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = (array) => {
  const cache = {};
  array.forEach((item) =>
    cache[item] ? (cache[item] += 1) : (cache[item] = 1)
  );
  const arrayOfModes = [];
  for (let key in cache) {
    if (cache[key] === Math.max(...Object.values(cache)))
      arrayOfModes.push(key);
  }
  return Math.max(...arrayOfModes);
};
// console.log(mode([3, 2, 4, 3])); //-> 3
// console.log(mode([7, 5, 8, 8, 2, 5])); //-> 8
/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = (array) => {
  array = array.flat(Infinity);
  return mode(array);
};

//attemp to write flat(Infinity)
function flattenDeep(array) {
  return array.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flattenDeep(item) : item),
    []
  );
}
console.log(flattenDeep([7, [[5, [8], 8], 2, 5]]));
console.log(flattenDeep([3, [4, 5, [3, 7, [8, 0], 23, 4], 5]]));
// console.log(modeNested([[3], [2, [4]], 3])); // -> 3
// console.log(modeNested([7, [[5, [8], 8], 2, 5]])); // -> 8
// console.log(modeNested([4, []])); // -> 4
module.exports = { mode, modeNested };
