function isEven(n) {
	if (n === 0) return true;
  else return !isEven(n-1)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(isEven(0)); // -> true
console.log(isEven(5)); // -> false
console.log(isEven(10)); // -> true
