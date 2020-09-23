// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}
let output = square(3)
// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (expected, actual, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log(`FAILED [testName] Expected "${expected}" but got "${actual}"`)
    }
}
// TESTS CASES
assertEqual(output, 9, 'get squared number')
