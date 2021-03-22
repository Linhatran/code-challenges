var largeGroupPositions = function(string) {
  let start = 0;
  let count = 0;
  let cache = [];
  for (let i = 0; i < string.length; i++) {
   
    if (string[start] === string[i]) {
      count++;

    } else {

      if (count >= 3) cache.push([start, start+count-1])
      start=i;
      count=1
    }
  }
  if (count >= 3) cache.push([start, start+count-1])
  return cache
};

Example 1:

Input: s = "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the only large group with start index 3 and end index 6.
Example 2:

Input: s = "abc"
Output: []
Explanation: We have groups "a", "b", and "c", none of which are large groups.
Example 3:

Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are "ddd", "eeee", and "bbb".
Example 4:

Input: s = "aba"
Output: []
