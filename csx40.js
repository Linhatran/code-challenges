// Add code here
function limitedInterval (callback, wait, limit) {
  let times = Math.floor(limit/wait)
  let counter = 0;
 	let myInterval = setInterval(() => {
    counter++;
    callback();
    if (counter === times) {clearInterval(myInterval)}
  }, wait);
  
}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
