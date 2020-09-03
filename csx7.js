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
