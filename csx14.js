// ADD CODE HERE
function intersection (arrays) {
    function reduce(arr, callback, initialValue) {
      	let accumulator = initialValue;
      	arr.forEach(num => accumulator = callback(accumulator, num))
      	return accumulator;
    }
  	function filter(array1, array2) {
    		let newArr = []
    		array1.forEach(num => (array2.includes(num)) ? newArr.push(num) : null)
    		return newArr
  	}
  return reduce(arrays, filter, arrays[0])
}

function toReduce(array) {
  return array.reduce((accumulator, item) => (accumulator.includes(item)) ? accumulator : [...accumulator, item],[]) //accumulator first = []
  //return accumulator 
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
