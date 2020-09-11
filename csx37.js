function flow(input, funcArray) {
//set a base case when funcArray has 0 element: return input
  if (funcArray.length === 0) return input;
// when length = 1, store input as output of the first func
  if (funcArray.length >= 1) {
    input = funcArray[0](input);
    
// call flow() recursively and return when reach base case which is no more func in array
    return flow(input, funcArray.slice(1));
  }
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
