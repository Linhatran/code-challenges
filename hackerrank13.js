function minMax(arr) {
  let sortedArr = arr.sort();
 
 let minSum = sortedArr.reduce((a,b)=>{return a+b}) - Math.max(...arr);
 let maxSum = sortedArr.reduce((a,b)=>{return a+b}) - Math.min(...arr);
  console.log(minSum)
  console.log(maxSum)
}
console.log(minMax([2,5,3,1,4]))
