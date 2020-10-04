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

//Question 7: count number of int in a nested array

function totalIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;
  let first = array.shift();
  //array is modified after using shift
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total++;
  }
  return total + totalIntegers(array)
}
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7

//Question 8: sum all squares of each number 
function SumSquares(array) {
  if (array.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result += SumSquares(array[i])
    } else {
      result += array[i]*array[i]
    }
  }
  return result
}
var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
