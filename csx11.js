function disemvowel(string) {
  // ADD CODE HERE
  let regex = /[aeiou]/gi;
  return string
    		.split('')
    		.filter(char => !char.match(regex))
    		.join('')
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
