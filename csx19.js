// ADD CODE HERE
function majority(array, callback) { //cb returns boolean
  let t = [];
  let f = [];
  array.forEach(num => callback(num) ? t.push('true') : f.push('false'))
  return t.length > f.length ? true : false
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
