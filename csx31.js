// ADD CODE HERE
function dateStamp(func) {
  let obj = {};
  return function (...arg) {
    obj.date = ( new Date() ).toString().split(' ').splice(0,4).join(' ')
    obj.output = func(...arg);
    return obj
  }
}
// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
