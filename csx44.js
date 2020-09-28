function objFilter(obj, callback) {
	let newObj = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = obj[key];
    }
  } 
  return newObj;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }
