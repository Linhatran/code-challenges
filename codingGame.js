//Question 1: Sum all numbers
function sumRange(num) {
  //set a base case
    //num = 1, return num
  //recursive call
    //call sumRange with num - 1
    //return num += sumRange(num-1)
  if (num === 1) return num;
  return num + sumRange(num-1)
}
console.log(sumRange(3))
//sumRange(3) returns 6, since 1 + 2 + 3 = 6.


//Question 2: Power function
function power(base, exp) {
  //set base case
    //small problem: exp === 0, result: base ** 0 === 1
  //recursive call 
    //exp ++
    //each time exp - 1, base * base
    //return base * power(exp-1)
  if (exp === 0) return base ** 0;
  return base* power(base, exp - 1)
}
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1


//Question 3: Calculate factorial
function factorial(n) {
  //set base case: n = 1 => return n
  //recursive call:
    //n = n - 1
    //return n* factorial(n-1)
  if (n === 1) return n;
  return n * factorial(n-1)
}
factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

//Question 4: Write a function called all which accepts an array and a callback and returns true if every 
//value in the array returns true when passed as parameter to the callback function
function all(array, cb) {
  //set base case:
    //array.length = 1
    //return cb(array[0])
  //recursive call
    //reduce length of array and return array[0] passed in cb
  if (array.length === 1) return cb(array[0])
  let remaining = array.slice(1);
  return all(remaining,cb)
}
console.log(all([1,2,9], function(num){return num < 7;
})); // false
console.log(all([2,4,6,8], function(num){return num % 2 === 0}));
