// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  const mySet = new Set();
  for (let i = 0; i < text.length; i++) {
      mySet.add(text[i])
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  return (mySet.size === text.length) ? true : false;
}
console.log(isIsogram('Linhh'))
