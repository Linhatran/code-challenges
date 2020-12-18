console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]



const matrixTranspose = (matrix) => {
  const cache = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!cache.hasOwnProperty(j)) {
        cache[j] = [matrix[i][j]];
      } else {
        cache[j] = cache[j].concat(matrix[i][j]);
      }
    }
  }
  return Object.values(cache);
};
const twoDimArray = [
  ['fred', 'barney'],
  [30, 40],
  [true, false],
];
console.log(matrixTranspose(twoDimArray));
