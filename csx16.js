// ADD CODE HERE
function objOfMatches(array1, array2, callback) {
  	let newObj = {}
    array1.forEach(num => {
      let index = array1.indexOf(num); //corresponding index 
      if (callback(num) === array2[index]) { 
        newObj[num] = array2[index] 
      }
    })
    return newObj;
}
// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
