// Given a list of words, write a program to find the longest word made of other words in the list.
// Example: ['dog', 'cat', 'walker', 'dogwalker'] -> 'dogwalker'

const findLongestWord = (arr) => {
  arr = arr.sort((a,b) => b.length - a.length);
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(i+1);
    for (let j = 0; j < subArr.length;j++) {
      if (arr[i].includes(subArr[j])) return arr[i]
    }
  }
}
console.log(findLongestWord(['dog', 'human','cat', 'walker', 'dogwalker', 'refrigerator']))
console.log(findLongestWord(['eye', 'mouth', 'eyemouth', 'hair', 'footloose', 'hairfootlose', 'paper']))
