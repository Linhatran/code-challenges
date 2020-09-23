function assertEqual(actual, expected, testName) {
  // your code here
  if (actual === expected) {
      console.log('passed')
  } else {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
  }
}
