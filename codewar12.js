var moveZeros = function (arr) {
  //filter 0 and push them in an array 
  let zero = []
  let noZero = []
  arr.filter(num => (num !== 0) ? noZero.push(num) : zero.push(num))
  return [...noZero, ...zero]
  //add that array to the end of arr
}
