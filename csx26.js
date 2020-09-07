// ADD CODE HERE
function after(times, cb) {
  let counter = 0;
  let result;
   return function doStuff(arg) {
     counter++;
     return (counter < times) ? result = undefined : result = cb(arg)
   }
  }

const called = function(string) { return('hello ' + string); }; //this is a cb
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
