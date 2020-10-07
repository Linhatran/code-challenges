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
console.log(lengthOfLongestSubstring("pwwkew")) //3
// console.log(lengthOfLongestSubstring("bbbbbb")) //1
// console.log(lengthOfLongestSubstring('abcabcbb')) //3
