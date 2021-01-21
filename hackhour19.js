/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
    if (!strs.length) return '';
    strs = strs.sort((a,b) => a.length - b.length)
    let cache = [...strs[0]];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < cache.length; j++) {
            if (cache[j] !== strs[i][j]) {
                cache = cache.slice(0,j)
            }
        }
   
    }
    return cache.join('');
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
module.exports = { longestCommonPrefix };
