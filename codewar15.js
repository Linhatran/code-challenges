Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.


var sum_pairs=function(array, num){
    //your code here
    let pairs = [];
    let lastIndex = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = i+1; j < array.length; j++) {
      if (current + array[j] === num) {
        pairs.push([current, array[j]])
        lastIndex.push(j)
      }
    } 
  }
  
  if (pairs.length < 1) return null;
  if (pairs.length === 1) return pairs[0];
  if (pairs.length > 1) {
    let minIndex = Math.min(...lastIndex);
    return pairs[lastIndex.indexOf(minIndex)]
  }
}
console.log(sum_pairs([11, 3, 7, 5], 10)) // 3,7
console.log(sum_pairs([4, 3, 2, 3, 4], 6)) // 4,2
console.log(sum_pairs([0, 0, -2, 3], 2)) //null
console.log(sum_pairs([10,5,2,3,7,5], 10))
