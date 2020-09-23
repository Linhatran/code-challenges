// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj['firstName'];
  var lastName = obj['lastName'];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}
const myName = {
    firstName : 'Linh',
    lastName : 'Tran'
}
const newName = {
    firstName : 'Linh',
    lastName : 'Tran',
    fullName : 'Linh Tran'
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual (expect, actual, testName) {
    const expectStr = JSON.stringify(expect);
    const actualStr = JSON.stringify(actual);
    let sameLength = expectStr.length === actualStr.length;
    let sameValue = true;
    for (let i = 0; i < actualStr.length; i++) {
        if (actualStr[i] !== expectStr[i]) {
            sameValue = false;
            break;
        }
    }
    if (sameLength && sameValue) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected ${expectStr} but got ${actualStr}`)
    }
}
// TESTS CASES
assertObjectsEqual(newName, name, 'add fullname')
