function isPrime(n) {
  let divisor = 2;
  let limit = Math.sqrt(n);
  if (n === 2 || n === 3) return true;
   if (n % 2 === 0) return false;
  while (divisor <= limit) {
    if (n % divisor === 0) return false;
    divisor+=2;
  }
  return true
}
console.log(isPrime(13))
