
function fib(n) {
	if (n===1 || n===2) return 1;
  return fib(n-1) + fib(n-2);
}

// To check if you've completed the challenge, uncomment this code!
//console.log(fib(1)); // -> 1
//console.log(fib(2)); // -> 1
//console.log(fib(7)); // -> 13
