function assertObjectsEqual(actual, expected, testName) {
  // your code here
  let actualStr = JSON.stringify(actual);
  let expectedStr = JSON.stringify(expected);
  let sameLength = actualStr.length === expectedStr.length;
  let sameValue = true;
  for (let i = 0; i < expectedStr.length; i++) {
      if (expectedStr[i] !== actualStr[i]) {
          sameValue = false;
          break
      }
  }
  if (sameValue && sameLength) {
      console.log('passed')
  } else {
      console.log(`FAILED [my test] Expected ${expectedStr}, but got ${actualStr}`)
  }
}

var person = {
  firstName: 'Cassidy',
  lastName: 'Jacobs'
};
updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Jacobs'
};

assertObjectsEqual(person, expected, "updates person's existing first name field");
// console output:
// passed
