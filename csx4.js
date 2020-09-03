const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (let num in checkObj) {
  if (checkObj.foundNum) {found++}
  break;
}
console.log(found)
