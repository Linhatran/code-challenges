function multiply (nums) {
  return nums.reduce((a,b) => a*b, 1)
}
function getProducts (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let arrWithoutI = array.filter(num => num !== array[i])
    newArr.push(multiply(arrWithoutI))
  }
  return newArr
}
console.log(getProducts([1,2,3,4,5])) // [120,60,40,30,24]

//Uber
