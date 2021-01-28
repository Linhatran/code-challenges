/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  const result = [];
  // const addParens = (n, leftParen = 0, rightParen = 0, string = '') => {
  //   if (leftParen === n && rightParen === n) result.push(string);
  //   if (leftParen < n) {
  //     const str = string + '(';
  //     addParens(n, leftParen+1, rightParen, str);
  //   }
  //   if (rightParen < leftParen) {
  //       const str = string + ')';
  //     addParens(n, leftParen, rightParen+1, str)
  //   }
  //   return string;
  // }
  // addParens(n)
  const generate = (str,l,r) => {
    if (r === 0) result.push(str);
    if (l > 0) generate(str + '(', l-1,r);
    if (r > l) generate(str + ')', l, r-1);
  }
  generate('', n, n)
  return result;
};
console.log(generateParentheses(3))
module.exports = {generateParentheses};
