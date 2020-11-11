

const times10 = (n) => n*10;
const memoize = (cb) => {
  const cache = {};
  return (n) => {
  if (!cache[n]) {
    let result = cb(n)
    cache[n] = result;
    return result;
  } else {
    return cache[n]
  }
}
}
const memoClosureTimes10 = memoize(times10);
console.log(memoClosureTimes10(5))
