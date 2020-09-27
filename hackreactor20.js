
function sumAltitudeDeltas(array, start, end) {
  //loop through array  
    //compare array[i] and array[i+1]
      //if array[i] >= array[i+1] distance =(difference)
      //if array[i] < array[i+1] distance = 2*Math.abs(difference)
      //push these into an array
//find sum of array using reduce 
let distance = [];
for (let i = start; i < end; i++) {
  if (array[i] >= array[i+1]) {
    distance.push(array[i] - array[i+1])
  } else {distance.push(2*Math.abs(array[i] - array[i+1]))}
}
return  distance.reduce((a,b) => a+b,0);
}
let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
console.log(output_4); //--> 50
let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
console.log(output_0); //--> 6

let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
console.log(output_1); //--> 7

let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); //--> 2

let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
console.log(output_3); //--> 15
