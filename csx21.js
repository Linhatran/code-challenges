// ADD CODE HERE
	function countBy (arr,cb) {
    let array = []
    arr.forEach(el => array.push(cb(el)))
    return array.reduce((obj,item) => {
      if (!obj[item]) {
        obj[item] = 0;
      } 
      obj[item]++
      return obj //or accumulator {}
    }
     ,{}) 
  }
// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
