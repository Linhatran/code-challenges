function isUnique(arr) {
  let cache = {};
  let result = true;
  for (let num of arr) {
    if (!cache[num]) {
      cache[num] = true;
    } else {
      result = false;
    }
  }
  return result;
}
console.log(isUnique([1,3,4,5])) //true
console.log(isUnique([3,5,6,3,4])) //false
