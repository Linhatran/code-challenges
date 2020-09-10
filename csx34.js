function factorial(num) {
	if (num === 0) return 1;
  return (num !== 1) ? num*factorial(num-1) : num;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
