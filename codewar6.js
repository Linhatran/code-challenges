function isPrime(num) {
	if (num < 2) return false;
  if (num === 2) return true;
  // num % n === 0; n = num or 1 
 	for (let i = num-1; i > 1; i--) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
