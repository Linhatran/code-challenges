const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j-1] > array[j]) {
        swap(array, j, j-1)
      }
    }
  }
  return array
// // optimized solution by checking is two nums are swapped or not
//   let swapped;
//   do {
//   swapped = false;
//   for (let i = 0; i < array.length; i++) {
//    if (array[i] && array[i+1] && array[i] > array[i+1]){
//      swap(array, i, i + 1)
//      swapped = true;
//    }
//   }
// } while(swapped)
// return array
}
console.log(bubbleSort([3,5,7,2,4,9]))
