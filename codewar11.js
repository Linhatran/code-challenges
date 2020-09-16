
function pigIt(str){
  //turn string into an array
  let splitStr = str.split(' ');
  let result = [];
  //loop through array and choose first letter
  for (let word of splitStr) {
   const splitWord = word.split('')
   splitWord.splice(splitWord.length,0,splitWord[0]);
  const newWord = splitWord.slice(1)
 result.push(newWord.join('')+'ay')
  }
 return result.join(' ')
}
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
