function isSorted (arr) {
  let sortedArray = quickSort(arr); //i could also just use .sort() but I wanted to try out the quick sort algorithm 
  return arr.toString() === sortedArray.toString();
}
function quickSort(array) {
    let pivot = array[array.length-1];
    let left = [];
    let right = [];
    if (array.length < 2) return array;
    for (let i = 0; i < array.length-1; i++) {
      (array[i] > pivot) ? right.push(array[i]) : left.push(array[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
//time complexity for the sorting is O(n^2) and strict strings comparison has time complexity of O(n)
console.log(isSorted([4,6,9,1,4,6,8,4,5,6,8,89])) // false
console.log(isSorted([12,45,67,89,123])) //true
console.log(isSorted([3])) //true
console.log(isSorted([])) //true
