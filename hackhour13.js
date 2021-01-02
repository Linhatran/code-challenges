/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = (arr) => {
  // for (let i = 0; i < arr.length / 2; i++) {
  //   let current = arr[i];
  //   arr[i] = arr[arr.length - 1 - i];
  //   arr[arr.length - 1 - i] = current;
  // }
  // return arr;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6])); //[4,2,1]

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = (sentence) => {
  sentence = reverseArray(sentence.split(' ')).join(' ');
  return sentence;
};
console.log(reverseSentence('bob likes dogs alot'));

module.exports = { reverseArray, reverseSentence };
