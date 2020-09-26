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

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
