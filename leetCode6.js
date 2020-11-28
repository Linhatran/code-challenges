var addDigits = function(num) {
  if (num < 10) return num;
  str = num.toString();
  num = str.split('').reduce((a,b) => parseInt(a)+parseInt(b))
  return addDigits(num)
};
