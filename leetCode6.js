var addDigits = function(num) {
  if (num < 10) return num;
  str = num.toString();
  num = str.split('').reduce((a,b) => parseInt(a)+parseInt(b))
  return addDigits(num)
};
-------------------------------
var addDigits = function(num) {
  let sum = num;
  while (sum > 9) {
    let arr = sum.toString().split('');
    sum = arr.reduce((a,b)=> parseInt(a) + parseInt(b))
  }
  return sum;
};
