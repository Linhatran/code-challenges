console.log('Hello, world!');

function repeater(char) {
  let string  = '';
	for (let i = 0; i <5;i++) {
    string += char;
  }
  return string;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));

