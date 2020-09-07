// ADD CODE HERE
function once(cb) {
  let counter = 0; 
  let result;
  return function doStuff (x) {
    counter++;
    return (counter<=1) ? result = cb(x) : result
    }
}
const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
