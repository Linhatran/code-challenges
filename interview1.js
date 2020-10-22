
function primeFactor(n) {
const factors = [];
let divisor = 2;

while (n > 2) { // think of how you find prime factors: divide by 2 first then if not divisible, increase to another prime number
  if (n % divisor === 0) {
    factors.push(divisor)
    n = n/divisor;
  } else {
    divisor++;
  }
}
  return [...new Set(factors)] //so no duplicates 
}
console.log(primeFactor(14))
