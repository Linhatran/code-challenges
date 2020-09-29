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
