function exclusiveSum(arr) {
  //bonus 1: no nested loops, only .forEach()
  const newArray = [];
  arr.forEach((num,index) => {
    let current = num;
    let others = [...arr.slice(0,index), ...arr.slice(index+1)];
    newArray.push(others.reduce((a,b) => a+b,0))
  })
  return newArray;
}
function exclusiveSumTests() {
  console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
  console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
  console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
  console.log(exclusiveSum([1]), ' -> ', [0]);
}

exclusiveSumTests() // uncomment to test

//bonus 2: exclusiveProduct()
function exclusiveProduct(arr) {
  const newArray = [];
  arr.forEach((num,index) => {
    let current = num;
    let others = [...arr.slice(0,index), ...arr.slice(index+1)];
    newArray.push(others.reduce((a,b) => a*b,1))
  })
  return (arr.length === 1) ? [0] : newArray;
}
function exclusiveProductTests() {
  console.log(exclusiveProduct([1,3,4,2]), ' -> ', [24, 8, 6, 12]);
  console.log(exclusiveProduct([1,2,5]), ' -> ', [10, 5, 2]);
  console.log(exclusiveProduct([1,2,5,0]), ' -> ', [0, 0, 0, 10]);
  console.log(exclusiveProduct([1]), ' -> ', [0]);
}
exclusiveProductTests()
