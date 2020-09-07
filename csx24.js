// ADD CODE HERE
function createFunctionWithInput(string) {
  return function printInput() {
    return string;
  }
}
// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'
 <------------------------------------------------>

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); //counter 1
willCounter(); //counter 2
willCounter(); //counter 3

jasCounter(); //counter 1
willCounter(); //counter 4
