function assertArraysEqual(actual, expected, testName) {
  // your code here
    let sameLength = actual.length === expected.length
    let sameValue = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        sameValue = false;
        break;
      }
    }
      if (sameLength && sameValue) {
          console.log('passed')
      } else {
          console.log(`FAILED [my test] Expected "${expected}", but got "${actual}"`)
      }
  }

var scalar1 = 'equal';
var scalar2 = 'equal';
console.log("two scalars can be compared with each other using triple equals: ", scalar1 === scalar2);

var array1 = ['a', 'b', 'c'];
var array2 = ['a', 'b', 'c'];
console.log("two arrays can be compared with each other using triple equals: ", array1 === array2);
