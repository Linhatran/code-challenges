function removeDuplicates (arr) {
  let outArray = [];
  let exists = {};
  let elm;

  for (let i = 0; i < arr.length; i++) {
    elm = arr[i];
    if (!exists[elm]) { //check if undefined
      outArray.push(elm);
      exists[elm] = true;
    }
  }
  return outArray
}
console.log(removeDuplicates([4,5,6,6,2,3,3,3,3,4,6,7,8,1])) //[4,5,6,2,3,4,7,8,1]
