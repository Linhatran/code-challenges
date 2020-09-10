function getLength(array) {
		let n = [];
  	let count = 0;
  	array.forEach(el => {n.push(el); count++})
  	return count;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
