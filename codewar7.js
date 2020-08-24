function wave(str){
  //split string into an array
  //get ['h','e','l','l','o']
  let final = [];
  
  //loop through each character 
  for (let i = 0; i < str.length; i++) {
  //each time loop through one, uppercase it 
    let arr = str.split(''); 
    if (arr[i] === ' ') {continue} //skip white space 
    arr[i] = arr[i].toUpperCase();
    //push it into an array
    final.push(arr.join(''))
    }
  //return an array of all the new stuff
  return final
}
console.log(wave('hello'));
