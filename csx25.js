// ADD CODE HERE
function once(cb) {
  let counter = 0; //instead of doing counter = 0; can do let hasBeenCalled = 'false';
  let result;
  return function doStuff (x) {
    counter++;
    return (counter<=1) ? result = cb(x) : result //if (!hasBeenCalled) ? result = cb(x) : result
    //can replace counter++ with hasBeenCalled = 'true'
    }
}
const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
