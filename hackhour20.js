/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {
    if (string.length < substring.length) return false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === substring[0]) {
           let str = string.slice(i, i+substring.length); 
            if (str === substring) return true;
        }
    }
    return false;
};
// console.log(needleInHaystack('xztzcatbfbbq', 'cat'));
/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {
      if (string.length < substring.length) return false;
      for (let i = 0; i < string.length; i++) {
          if (string[i] === '_' || string[i] === substring[0]) {
              let str = string.slice(i, i + substring.length);
              for (let j = 0; j < str.length; j++) {
               if (str[j] !== substring[j] && str[j] !== '_' && substring[j] !== '_') {
                   return false;
                } 
              }
              return true
          }
      }
  
};
console.log(needleInHaystackWithWildcards('_ello_orld', 'helloworl_'));
module.exports = { needleInHaystack, needleInHaystackWithWildcards };
