function pow(base, exponent) {
		return (exponent !== 1) ? base*pow(base,exponent-1) : base
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
