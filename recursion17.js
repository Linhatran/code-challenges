function getAllCombos(arr) {
	if (arr.length <= 0) return [arr];
  let subArrays = getAllCombos(arr.slice(1));
  let current = arr[0];
  return subArrays.concat(subArrays.map(item => item.concat(current)))
}
// To check if you've completed the challenge, uncomment this code!
console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
console.log(getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]
console.log(getAllCombos(['a', 'b', 'c','d']));
