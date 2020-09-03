const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
// ADD CODE HERE
const objToArray = Object.values(checkObj);
divBy6 = objToArray.some(num => (num % 6 ===0))
console.log(divBy6)
