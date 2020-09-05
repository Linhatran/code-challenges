// ADD CODE HERE
function groupBy (array, cb) {
  let obj = {}
	array.forEach(num => { //loop through each decimal
    if (!obj[cb(num)]) { //check if obj key = the return of callback is undefined
      obj[cb(num)] = [num] //if there is no such key, CREATE the key and pass in the corresponding value
    } else 
    obj[cb(num)].push(num) //if the key is there, just push the value in value array
  })
  return obj
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
