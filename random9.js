const uniqSort = (arr) => {
  const cache = {};
  let uniqArr = [];
  for (let num of arr) {
    if (!cache[num]) {
      cache[num] = true;
      uniqArr.push(num)
    }
  }
  return uniqArr.sort((a,b)=> a-b)
}
console.log(uniqSort([1,5,1,2])) //[1,2,5]
console.log(uniqSort([4,2,2,3,2,2,2]))//[2,3,4]
