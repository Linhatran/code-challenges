/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //opening brackets
    const valids = ['()', '[]', '{}'];
    const openBrackets = {
        "(" : true,
        "{" : true,
        "[" : true
    }
    const closingBrackets = {
        ")" : true,
        "}" : true,
        "]" : true
    }
    const stack = [];
    const length = s.split('').length;
    if (length <= 1) return false;
  for (let i = 0; i < length; i++) {
    if (openBrackets[s[i]]) {
      stack.push(s[i]);
    } 
    else if (closingBrackets[s[i]]) {
      const leftBracket = stack.pop();
      const pair = leftBracket+s[i];
      if (!valids.includes(pair)) {
        return false;
      }
    }
  }
    return (!stack.length);
};
