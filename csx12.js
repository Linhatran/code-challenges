// ADD CODE HERE
const pluralize = (arr) => {
  return arr.map(word => `${word}s`)
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]


// ADD CODE HERE
const subtractTwo = num => num = num-2;
const map = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i])
  }
  return arr;
}
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
