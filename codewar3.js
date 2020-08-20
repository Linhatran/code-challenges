function order(words){
  //turn string into an array using split
  let arr = words.split(' ');
  let finalArr = [];
  let numArr = [1,2,3,4,5,6,7,8,9];
  for (i=0;i<numArr.length;i++) {
    for (j=0;j<arr.length;j++) {
      if (arr[j].includes(numArr[i])) {
      finalArr.push(arr[j]);
    }
  }
} 
  return finalArr.join(' ');
}
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order("is2 Thi1s T4est 3a"));
