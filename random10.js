
const memoizedClosureTimes10 = (n) => {
  const cache = {};
  return (n) => {
  if (!cache[n]) {
    let result = n*10
    cache[n] = result;
    return result;
  } else {
    return cache[n]
  }
}
}
const memoClosureTimes10 = memoizedClosureTimes10();
console.log(memoClosureTimes10(9))
