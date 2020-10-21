function isPrime(num, i = num-1) {
  	if (num < 2) return false;
  	if (num === 2) return true;
  	//base case
  	if (num % i === 0 ) return false;
    return isPrime(num, i-1)
}


console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(9)); //-> false
