// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]))
  }
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}
const result = cubeAll([2,3,4]);
// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual (output, expect, testName) {
    let sameLength = output.length === expect.length;
    let sameValue = true;
    for (let i = 0; i < output.length; i++) {
        if (output[i] !== expect[i]) {
            sameValue = false;
            break;
        }
    }
    if (sameValue && sameLength) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected ${expect} but got ${output}`)
    }
}

// TESTS CASES
assertArraysEqual (result, [8, 27, 64], 'get cubed values of array elements')
