// ADD CODE HERE
//needStr usually behaves like func except when arg = str it prints an obj with key = passed in arg and values = output of that
function saveOutput (func, str) { 
  let obj = {};
  let keys = [];
  let values = []
  return function needStr(arg) {
    if (arg !== str) {
      keys.push(arg.toString())
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
// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
