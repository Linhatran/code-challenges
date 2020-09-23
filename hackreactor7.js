// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch;

  for (var i = 0; i < array.length; i++) {
    if (!callbackFunction(array[i])) {
    doesEveryElementMatch = false;
    } else { 
      doesEveryElementMatch = true;
    }
    return doesEveryElementMatch
  }

  return doesEveryElementMatch;
}

function isGreaterThanFive(...array) {
    for (let value of array) {
    return (value > 5) ? true : false
    }
}
const everyOutcome = every([2,4,7,8,3,124], isGreaterThanFive)
const result = isGreaterThanFive([2,4,7,8,3,124])

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (expect, actual, testName) {
    if (expect === actual) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected ${expect} but got ${actual}`)
    }
}

// TESTS CASES
assertEqual(result, everyOutcome, 'check if everything is greater than 5')
