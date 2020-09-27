// Flip every pair of characters in a string.


// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
function flipPairs(string) {
  let output = '';
  for (let i = 0; i < string.length; i+=2) {
    if (string[i+1] === undefined) {
      output+= string[i];
      break;
    }
    output+= string[i+1];
    output+= string[i];
  }
  return output;
};
console.log(flipPairs('abcd'))
