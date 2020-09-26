// ADD CODE HERE
function intersection(...arrays) {
  return arrays.reduce((array1, array2) => array1.filter(num => array2.includes(num)))
	
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
