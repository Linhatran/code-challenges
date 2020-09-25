// Challenge 2
function sum(array) {
  //base case: length = 1, return array[0]
  if (array.length <= 1) return array[0];
  //mutate array: array.slice(1)
  return array[0] + sum(array.slice(1))
}
