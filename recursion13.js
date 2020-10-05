function quickSort(array) {
  const pivot = array[array.length-1];
  const left = [];
  const right = [];
  if (array.length < 2) return array;
  for (let i = 0; i < array.length-1; i++) {
    (array[i] < pivot) ? left.push(array[i]) : right.push(array[i])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4,8,95,2,56,13,542,6,946,9])) 
