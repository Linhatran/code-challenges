// function union(...arrays) {
//   let result = []
//   let newArr = arrays[0].concat(...arrays.slice(1))
	
//   return [...new Set(newArr)]
// }

function union(...arrays) {
  return arrays.reduce((array1, array2) => [...new Set(array1.concat(array2))]) 
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
//should log: [5, 10, 15, 88, 1, 7, 100]
