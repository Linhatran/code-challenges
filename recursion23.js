function commonElements(array1, array2){
  //filter out duplicates 
  array1 = [...new Set(array1)];
  array2 = [...new Set(array2)];
  //find shorter array to recurse on 
  let shorter, longer;
  if (array1.length < array2.length) {
    shorter = array1;
    longer = array2;
  } else {
    shorter = array2;
    longer = array1;
  }
  let result = [];
  //base case
  if (shorter.length === 0) return result;
  //find intersection
  if (longer.includes(shorter[0])) {
    result.push(shorter[0])
  }
  //recursive call
  return [...result, ...commonElements(longer, shorter.slice(1))]
}

function commonElementsTests() {
  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
}

commonElementsTests() // uncomment to test
