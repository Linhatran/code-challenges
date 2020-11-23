/* 
Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 
For example: 
binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5
For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary
*/

function binToDec(binString) {
  //turn string into an array and reverse the array to access each item in a reversed order
  const arr = binString.split('').reverse();
  //initialize sum to 0, sum represents the decimal number
  let sum = 0;
  //loop through each num, multiple it with 2 to the power of the index that num is at
  arr.forEach((num, i) => (sum += num * 2 ** i));
  //add the multiplications together to get the decimal number
  return sum;
}

//-------- different approach -----//
function binToDec2(binString) {
  return binString
    .split('')
    .reverse()
    .reduce((a, b, i) => a + b * 2 ** i, 0);
}

console.log(binToDec('0101')); // -> 5

module.exports = { binToDec };
