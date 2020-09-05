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


// ADD CODE HERE
const forEach = (arr, cb) => {
  for (let i = 0; i<arr.length; i++) {
    cb(arr[i])
  }
}
const map = (arr, cb) => {
  let newArr = [];
  arr.forEach(num => newArr.push(cb(num)) )
  return newArr
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
  let newArray = []
  array.forEach(num => {
    if (callback1(num) || callback2(num)) newArray.push(num)
  })
  return newArray
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]



function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  return function newCb (arr) {
    if (callback1(arr) || callback2(arr)) return [callback1(arr), callback2(arr)] 
  }
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]


// ADD CODE HERE
function reduce (arr, cb, init) {
  if (Array.isArray(arr)) {
    let accumulator;
    if (init === undefined) {
      accumulator = arr[0]
      arr = arr.slice(1)
    } else {accumulator = init}
    arr.forEach(num => accumulator = cb(num,accumulator))
  	return accumulator
  }
  return `Please pass in an array!`
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
