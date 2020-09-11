function getLength(array) {
	let count = 0;
	for (let element of array) {
	count++;
  	return count;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

	///// second method
function getLength(array, length = 0) {
  	if (array[0] === undefined) return length;
    length++;
  	return getLength(array.slice(1), length);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
