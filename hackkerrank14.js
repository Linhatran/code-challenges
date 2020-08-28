function candle(arr) {
  let max = Math.max(...arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      count++;
    }
  }
  return count
}
console.log(candle([3,2,1,3]))
