function quickSort (array) {
  let pivot = array[array.length-1];
  let left = [];
  let right = [];
  if (array.length < 2) return array;
  for (let i = 0; i < array.length - 1; i++) {
   (array[i] > pivot) ? right.push(array[i]) : left.push(array[i])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

var findMedianSortedArrays = function(nums1, nums2) {
    //merge + sort array 
  let sortedMerged = quickSort([...nums1,...nums2]);
  
    //find in the middle
  let middle = Math.floor(sortedMerged.length/2)
  
  if (sortedMerged.length % 2 !== 0) {
    return sortedMerged[middle];
  } else {
    return (sortedMerged[middle] + sortedMerged[middle-1])/2
  }
      
};
