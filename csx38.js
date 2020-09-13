//initiate a fn defition and assign to a label forEach 
function forEach(arr,cb) {
	for (let el of arr) {
    cb(el, arr.indexOf(el))
  }
}
// //initate an array delays
const delays = [200, 500, 0, 350];

//initiate a fn defition and assign it to delayLog (delayTime, i)
function delayLog(delayTime, i) {
    function printStuff () {
      console.log(`printing element ${i}`)
    }
	return setTimeout(printStuff, delayTime)
}
//run delayLog 
// console.log(forEach(delays, delayLog))
console.log(forEach(delays,delayLog))
