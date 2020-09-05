function arrToObj(array, callback) {
  // ADD CODE HERE
  let newObj = {};
  array.forEach(el => newObj[el] = callback(el))
  return newObj
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
