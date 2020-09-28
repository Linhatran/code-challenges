function highestFunc(objOfFuncs, subject) {
	let results = [];
  let keys = Object.keys(objOfFuncs);
  for (let func in objOfFuncs) {
    // results.push(func(subject))
    let myFunc = objOfFuncs[func];
    results.push(myFunc(subject))
  }
  let indexOfHighest = results.indexOf(Math.max(...results));
  return keys[indexOfHighest];
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
