// Challenge 1
//Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.

function countdown(n) {
  if (n===0) return;
	console.log(n)
  return countdown(n-1)
}

countdown(5);
countdown(10);
