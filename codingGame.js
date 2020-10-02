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
