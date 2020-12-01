function pow(base, exponent) {
		return (exponent !== 1) ? base*pow(base,exponent-1) : base
}

function pow(base, power) {
  //handle our edge cases
  if (power === 0) return 1;
  else if (power === 1) return base;
  
  //create a storage variable
  let total = base;
  //use a for loop to repeat the multiplication power - 1 times
  for (let counter = power; counter > 1; counter -= 1) {
    //each time multiply our storage variable by the base
    total *= base;
  }
  return total;

function powRecurseTCO(base, power, value = base) {
  // base case
  if (power === 0) return 1;
  if (power === 1) return value;
  // recursive logic here
  return powRecurseTCO(base, power - 1, value * base);
  }

//can add cache to memoize value to speed up the calculation like with fib
// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
