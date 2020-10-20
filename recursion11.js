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

//Question 9: The function should return an array containing repetitions of 
//the number argument. For instance, replicate(3, 5) should return [5,5,5].
//If the times argument is negative, return an empty array.

function replicate(times, value) {
  let result = [];
  //base case 
    //times <= 0
    //do nothing: return result;
  //recursive call
    //result.push(value)
    //return replicate(times-1, value)
  if (times <= 0) return result;
  return [value].concat(replicate(times-1, value))
}
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

//Question 10: quick sort an array
const arr = [6, 1, 5, 3, 9, 6, 7, 10, 16, 4, 0, 12, 2]
function quickSort(array) {
  if (array.length < 2) return array;
  const [x, ...rest] = array;
  //partition the array into high and low
  const high = rest.filter(num => num > x);
  const low = rest.filter(num => num <= x);
  return [...quickSort(low), x, ...quickSort(high)]
}
console.log(quickSort(arr))
