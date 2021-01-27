/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const substringNonrepeating = str => {
    if (!str) return 0;
    if (str.length === 1) return 1;
  // loop through str
  // variable to keep track of longest
  // push first index to an empty string, move on to next
    //if next is diff, push to string, until repeat, compare that with the longest
    let longest = '';
    let current = '';
    let i = 0; j = 0;
    while (i < str.length) {
        
        if (!current.includes(str[i])) {
            current+=str[i];
            i++;
            if (longest.length < current.length) longest = current;
        } else {
            current = '';
            j++;
            i = j;
        }
    }
    return longest.length;
};

console.log(substringNonrepeating('lolk')); //3
module.exports = {substringNonrepeating};
