
// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  let list = [];
  // split sentence into words
  let words = sentence.split(' ');
  // iterate words and collect the palindromes
  for (let word of words) {
    if (isPalindrome(word)) {
      list.push(word)
    }
  }
  list.sort((a,b) => a.length > b.length ? -1 : 1)
  return list[0]
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
}
console.log(findLongestPalindrome('a cute racecar went down to eye stettets'));



function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  
	if (word.length <= 1) return true;
  let first = word[0];
  let last = word[word.length-1];
  return (first !== last) ? false : true;
  return isPalindrome(word.subString(word[1],word[word.length-1]))
}
