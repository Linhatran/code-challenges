function once(func) {
  let count = 0;
  let result;
	return function (num) {
    if (count === 0) {
      count++;
      return result = func(num);
    } 
    return result;
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6

-------------------------------------------
	// ADD CODE HERE
function once(cb) {
  let counter = 0;
  let result;
  return function doStuff(num) {
    counter++;
    return (counter <= 1) ? result = cb(num) : result;
  }
}
const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
