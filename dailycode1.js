//GIVEN A LIST OF NUMBERS AND A NUMBER K, RETURN WHETHER ANY TWO NUMBERS FROM THE LIST ADD UP TO K 
//[10,15,3,7], k = 17, return true since 10 + 7 = 17
//function takes 2 parameters: an array of numbers, and k
// loop through array and see if 2 values add up to k
//do one loop inside another loop 
//if true, return true and two values
//if false, return false and log no values found 
function findNums (array, k) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      let sum = array[i] + array[j];
  
      if (sum === k) {
        console.log(`${array[i]} and ${array[j]} give us k = ${k}`)  ;
        return true;
      } 
    }
  }
  return false
}
console.log(findNums([10,15,3,7], 10))

//google challenge
