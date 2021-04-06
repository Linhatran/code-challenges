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

onst matrixTranspose = matrix => {
  if (!matrix.length) return matrix;

  const transposed = [];
  
  for (let i = 0; i < matrix[0].length; i += 1) {
    const row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    transposed.push(row);
  }

  return transposed;
};

// Solution #2: Using Array.prototype.map
const matrixTranspose = matrix => {
  if (!matrix.length) return matrix;
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
};

const twoDimArray = [
  ['fred', 'barney'],
  [30, 40],
  [true, false],
];
console.log(matrixTranspose(twoDimArray));
