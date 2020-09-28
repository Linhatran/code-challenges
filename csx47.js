function reduce (callback, initialValue,array) {
	let value = initialValue;
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    value = callback(value, currentValue)
  }
  return value;
} 
function getSum(initialValue, currentValue) {
  return initialValue + currentValue
}
console.log(reduce(getSum, 0, [3,4,5]))
