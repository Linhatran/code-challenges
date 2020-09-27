function isRotated(string1, string2) {
  //initialize an empty string;
  //double the string by pushing the string into the empty string twice
  //check if the new string includes the passed in string
    //true // false
  let doubledString = '';
  doubledString = string1 + string1;
  return (doubledString.includes(string2))
}
console.log(isRotated('hello world','orldhello w'))
