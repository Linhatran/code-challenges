
 let num = 0;
function incrementUntil(max) {
  //base case: num = max
    //return num, stop
  //recursive call:
    //console.log from 0 to max 
  if (num >= max+1) return num;
  console.log(num);
  num++;
  incrementUntil(max)
}
console.log(incrementUntil(5))
