function myFunc(array, callback) {
  let result;
 	array.forEach((num, i) => {
 (callback(num)) ? result = i : null;
  })
 if(!result) return -1;
  return result;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];
