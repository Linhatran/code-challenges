function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * array.length)
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    return array;
}

function shuffleTests() {
  console.log(shuffle([1, 2, 3, 4, 5]), ' -> ?');
  console.log(shuffle([10, 4, 7, 6, 1]), ' -> ?');
  console.log(shuffle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> ?');
}

//shuffleTests() // Determine a way to test this function!

function findMissing(array, n = array.length) {
	array.sort((a,b) => a - b);
  for (let i = 0; i < n; i++) {
    if (array[i] !== i) return i;
  }
}

function findMissingTests() {
  console.log(findMissing([0, 1, 2, 3, 4, 5, 7]), ' -> 6');
  console.log(findMissing([7, 5, 4, 3, 2, 1, 0]), ' -> 6');
  console.log(findMissing([0, 7, 1, 5, 2, 4, 3]), ' -> 6');
  
}

findMissingTests() 
