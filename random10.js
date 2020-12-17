//trading space complexity with time complexity 

const times10 = (n) => n*10;
function memoize(func) {
  const hash = {};
  return function(...args) {
    const stringArgs = JSON.stringify(...args);
    if (!hash.hasOwnProperty(stringArgs)) {
      hash[stringArgs] = func(...args)
    } 
    return hash[stringArgs];
  }
}
const memoClosureTimes10 = memoize(times10);
console.log(memoClosureTimes10(5))


const cachePromiseFunction2 = (get) => {
  const cache = {};
  return function cachedPromiseFunc(url) {
    if (!cache[url]) {
      cache[url] = Promise.resolve(get(url));
      return cache[url];
    } else {
      return cache[url];
    }
  };
};
