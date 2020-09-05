const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i <= possibleIterable.length; i++) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[`${possibleIterable[i]}`] = possibleIterable.indexOf(possibleIterable[i])
  }
}
console.log(divByThree)


const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for (let key in sumMe) {
  if (typeof sumMe[key] === 'number') {total+= sumMe[key]}
}
console.log(total)


// ADD CODE HERE 
function addWaldo(obj) {
  obj['Waldo'] = 'unknown';
  return obj;
}
// Uncomment these to check your work!
const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

// ADD CODE HERE
function findWaldo(obj) {
  return (obj['Waldo']) ? obj.Waldo : (`Where's Waldo?`)
}
// Uncomment these to check your work!
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'
