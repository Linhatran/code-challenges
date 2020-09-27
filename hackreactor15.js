function flipEveryNChars(string,n) {
  let result = '';
  string = string.split('')
  for (let i = 0; i < string.length; i+=n) {
    let subString = string.slice(i,i+n);
    let reversedString = subString.reverse().join('');
    result += reversedString
  }
   return result;
}
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
