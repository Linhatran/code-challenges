function factorial (n) {
  //base case 
  let output = 1;
		//if n <= 1, return output 
  if (n < 2) return output;
  //recursive call 
  return n*factorial(n-1)
}
console.log(factorial(3))
