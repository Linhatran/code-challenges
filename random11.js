function joinElement(array, jointString) {
  let result = '';
  // for (let i = 0; i < array.length; i++) {
  //   result += array[i] + jointString;
  // }
  // return result.slice(0,-1)
  if (array.length === 1) return result + array[array.length-1];
  result = array[0] + jointString;
  return result += joinElement(array.slice(1), jointString)
}
console.log(joinElement(['s','cr','t cod', ' :) :)'],'e'))//secret code :) :)
