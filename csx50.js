function saveOutput(func, magicWord) {
  let keys = [];
  let values = [];
  let obj = {};
	return function (arg) {
    if (arg !== magicWord) {
      keys.push(arg);
      values.push(func(arg))
      return func(arg)
    } else {
      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i]
      }
      return obj
    }
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
