function mergeSort(array) {
  
  //divide and conquer: 
    //declare the middle index
    //declare the left and right arrays 
    //base case if array.length = 2, stop and return array
    //call recursion on left and right arrays
    //merge/stitch them all together at the end 
  
  let length = array.length;
  let middle = Math.floor(length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, length);

  if (length < 2) return array; //base case
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
}

function stitch(left, right) {
  //condition: if left and right still has elements in it 
    //declare result = []
    //run the loop to compare, if smaller, push to result
  //if one array runs out of elements, push the other in result 
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (!left.length) result.push(...right);
  if (!right.length) result.push(...left);
  return result;
}
console.log(stitch([2,5,7], [9,56,89]))
console.log(mergeSort([4,8,95,2,56,13,542,6,946,9]))

<----------------Merge Sort with sorted Arrays--------->
  function mergeSort(array1, array2) {
  let aElm = array1[0];
  let bElm = array2[0];
  let i = 1;
  let j = 1;
  let merged = [];

if (array1.length === 0) return array2;
if (array2.length === 0) return array1;
  while (aElm || bElm) {
    if (aElm && !bElm || aElm < bElm) {
   
      merged.push(aElm);
      aElm= array1[i++];
    } else {
      
      merged.push(bElm)
      bElm= array2[j++]
    }
  }
  return merged;
}
console.log(mergeSort([2,8,23,56], [3,5,90])) 
