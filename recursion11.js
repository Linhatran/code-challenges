//Challenge 6
function flattenRecursively(arr) {
  let result = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      result.push(...flattenRecursively(el))
    } else {
      result.push(el) //base case: none of the elements is an array
    }
  })
	return result
}

let myArray = [[1, 2], 3, [4, [3,[5]],5]];
function flat (array) {
 	return array.reduce((acc,item) => acc.concat(Array.isArray(item) ? flat(item) : item),[])
}
console.log(flat(myArray))

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
