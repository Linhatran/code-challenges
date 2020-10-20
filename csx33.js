console.log('Hello, world!');

function repeater(char) {
  let string  = '';
	for (let i = 0; i <5;i++) {
    string += char;
  }
  return string;
}
function repeater(char, n = 5) {
	let result = [];
  if (n <= 0) return result;
  result.push(char);
  return result.concat(repeater(char, n-1)).join('')
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));

