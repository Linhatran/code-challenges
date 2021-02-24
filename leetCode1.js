var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let n = s.length;
    let subStrings = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        let subString = s.slice(i,j)
        subStrings.push(subString.split('').filter((item, index) => subString.split('').indexOf(item) === index).join(''))
      }
    }
    let lengthsOfSubstring = [...new Set(subStrings)].filter(word => s.includes(word)).map(word => word.length);
    
    return Math.max(...lengthsOfSubstring)
    
};

const getLongest = (n) => {
  const cache = new Map();
  let start = 0;
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    const curr = n[i];
    //check if cache has that char and index of cached char is greater than start 
    if (cache.has(curr) && cache.get(curr) >= start) {
      //if duplicate is at i, then new (longer) substring would start at the next index
      start = i+1;
   
    }
    // update index of current char to be the value of curr in cache
    cache.set(curr, i);
    // i - start + 1: to find the length of substring
    max = Math.max(max, i - start + 1)
  }
  return max
}
console.log(getLongest('OBAMAVZXSDCARE'))

console.log(lengthOfLongestSubstring("pwwkew")) //3
// console.log(lengthOfLongestSubstring("bbbbbb")) //1
// console.log(lengthOfLongestSubstring('abcabcbb')) //3
