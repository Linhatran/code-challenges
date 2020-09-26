function getPermutations(arr) {
  let result = [];
	//set basecase
  	//when arr.length < 2, return arr
  if (arr.length < 2) return arr;
  //break down to subproblem
  //declare the current value and the remaining 
  //recursive call
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let remaining = arr.slice(0,i).concat(arr.slice(i+1, arr.length))
    
    getPermutations(remaining).forEach(permutation => {
      result.push([current +',' + permutation])
    })
  }
  return result
}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1,2,3])) //-> [[1,2,3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(getPermutations([2,3,4,5,6]))
