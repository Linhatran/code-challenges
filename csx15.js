// ADD CODE HERE
function union (arrays) {
  	function reduce(array, callback, initialValue) {
      let accumulator = initialValue;
      array.forEach(num => accumulator = callback(accumulator, num))
      return accumulator;
    }
  	function flat(array1,array2) {
      let unitedArray = array1.concat(array2)
      let result = [...new Set(unitedArray)]
      return result
    }
  return reduce(arrays, flat, arrays[0])
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
