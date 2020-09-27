// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
function transposeTwoStrings(arrayOfStrings) {
  //initialize an empty string for the output
  //loop through each string (for loop)
  
  //output += string 1[0] string2 [0] \n
  let result = '';
  let longString = '';
  let shortString = '';
    if (arrayOfStrings[0].length >= arrayOfStrings[1].length) {
      longString += arrayOfStrings[0];
      shortString += arrayOfStrings[1];
  } else {
      longString += arrayOfStrings[1];
      shortString += arrayOfStrings[0];
  }
  for (let i = 0; i  < longString.split('').length; i++) {
    let firstChar = longString.split('')[i] || ' ';
    let secondChar = shortString.split('')[i] || ' ';
    result += `${firstChar} ${secondChar}\n`
  }
  return result;
}

 console.log(transposeTwoStrings(['Hellooo','World']));

// should return:
// H W  
// e o  
// l r  
// l l  
// o d
