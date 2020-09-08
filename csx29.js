// ADD CODE HERE
function cycleIterator (array) {
  let currentElement = [];
  return function () {
    array.forEach(element => currentElement.push(element))
    return currentElement.shift();
  }
}

//second way 
function cycleIterator (array) {
  let index = 0;
  return function () {
  let result = array[index++]
  if (index >= array.length) index = 0;
    return result;
  }
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
