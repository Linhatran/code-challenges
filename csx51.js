ADD CODE HERE
function cycleIterator (array) {
  //declare an empty array
  //loop over array, push each index into an empty array
  //with each fn call, return the first element of that empty array
  let myDays = [];
  return function getDay() {
    array.forEach(day => myDays.push(day));
    return myDays.shift()
  }
}

function cycleIterator (array) {
  let i = 0;
  return function getDat () {
    let result = array[i++];
    if (i >= array.length) i = 0;
    return result;
    }
  }

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
