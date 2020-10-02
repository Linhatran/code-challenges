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
