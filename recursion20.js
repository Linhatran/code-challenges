function getLength(array, i = 0) {
  let length = 0;
	if (array[i] === undefined) return length;
  length++;
  return length + getLength(array,i+=1)
}

// To check if you've completed the challenge, uncomment these console.logs!
//console.log(getLength([1])); // -> 1
//console.log(getLength([1, 2])); // -> 2
//console.log(getLength([1, 2, 3, 4, 5])); // -> 5
