////////////////////////////
//     Challenge 1
////////////////////////////
function product(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return arr[0] * product (arr.slice(1), i++)
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(product([1, 2, 3, 4])); // -> 24
// console.log(product([1, 2, 3, 4, 5])); // -> 120
// console.log(product([4, 5, 6])); // -> 120

////////////////////////////
//     Challenge 2
////////////////////////////

function containsDuplicates(arr) {
	const noDups = [...new Set(arr)];
  return (arr.toString() === noDups.toString()) ? false : true;
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(containsDuplicates([1, 2, 3, 4, 5, 6])); // -> false
// console.log(containsDuplicates([1, 2, 3, 4, 5, 6, 3])); // -> true
// console.log(containsDuplicates([])); // -> false


////////////////////////////
//     Challenge 3
////////////////////////////

function createFib() {
  let memo = {}
	
  return function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    // add another base case;
		if (n < 0) return null;
    if (n in memo) {
      return memo[n];
    } else {
      memo[n] = fib(n-1) + fib(n-2);
      return memo[n];
    }
  }
  
}

const fib = createFib();

//To check if you've completed the challenge, uncomment these console.logs!
console.log(fib(0)); // -> 0
console.log(fib(5)); // -> 5
console.log(fib(37)); // -> 24157817
console.log(fib(-3))
console.log(fib(45)); // only uncomment me if you're sure that memoization is working



////////////////////////////
//     Challenge 4
////////////////////////////

function smallestDiff(arr) {
	arr.sort((a,b) => a-b);
  const differences = [];
  for (let i = 0; i < arr.length-1; i++) {
  	differences.push(arr[i+1] - arr[i])
  }
  return Math.min(...differences)
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(smallestDiff([4, 1, 3])); // -> 1
// console.log(smallestDiff([10, 20, 30, 40, 50, 60])); // -> 10
// console.log(smallestDiff([1, 2, 3, 4, 5, 6, 7])); // -> 1




////////////////////////////
//     Challenge 5
////////////////////////////

function balancedParens(str) {
  let stack = [];
  let parensArray = str.split('');
  for (let i = 0; i < parensArray.length; i ++) {
    if (parensArray[i] === '(') {
      stack.push(parensArray[i]) 
    } else {
      if (stack.length !== 0) {
        stack.pop() //make sure the stack still has thing to pop, if not return false 
      } else {
        return false;
      }
    }
   
  }
  return stack.length === 0;
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(balancedParens('()')); // -> true
// console.log(balancedParens(')(')); // -> false
// console.log(balancedParens('(()(()))')); // -> true
// console.log(balancedParens('((()')); // -> false
// console.log(balancedParens('((()))))))))')); ///false
