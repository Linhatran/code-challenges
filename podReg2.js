//Challenge Part 1
function addingToX(num) {
  if (num === 0) return num;
  return num + addingToX(num-1)
}

// Test your answer (delete the //)
console.log(addingToX(1));  // 1
console.log(addingToX(2));  // 3
console.log(addingToX(3));  // 6
console.log(addingToX(10)); // 55

//Challenge Part 2

function arrayToX(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(addingToX(i))
  }
  return result;
}

//Test your answer (delete the //)
console.log(arrayToX(1));   // [1]
console.log(arrayToX(2));   // [1, 3]
console.log(arrayToX(3));   // [1, 3, 6]
console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
