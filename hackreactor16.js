
function detectOutlierValue(string) {
  //split the string into an array 
  //loop through array with for loop, i = 1, i <= array.length
    //push even values in an even array
    //push odd values in an odd array
    //compare: if odd array length > even array length
      //the sole value is even, find that index in big array and vice versa
  let arrayOfNums = string.split(' ');
  let even = [];
  let odd = [];
  for (let i = 0; i < arrayOfNums.length; i++) {
    (arrayOfNums[i] % 2 === 0) ? even.push(arrayOfNums[i]) : odd.push(arrayOfNums[i]);
  }
  if (even.length > odd.length) return 1 + arrayOfNums.indexOf(odd[0]);
  if (even.length < odd.length) return 1 + arrayOfNums.indexOf(even[0]);
}
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd
