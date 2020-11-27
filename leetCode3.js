var isValid = function(s) {
    //opening brackets
    const valids = ['()', '[]', '{}'];
   const openBrackets = '([{';
   const closingBrackets = ')]}';
  const stack = [];
  const length = s.split('').length;

  if (closingBrackets.includes(s[0])) return false;
  for (let i = 0; i < length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    } 
    else if (closingBrackets.includes(s[i])) {
      const leftBracket = stack.pop();
      const pair = leftBracket+s[i];
      if (!valids.includes(pair)) {
        return false;
      }
    }
  }
    return true;
};
