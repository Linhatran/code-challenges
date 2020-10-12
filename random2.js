function shuffle (arr) {
  //loop over array backward
  for (let i = arr.length-1; i > 0; i--) {
  //pick random index before current element
  let j = Math.floor(Math.random()* (i+1));
  //swap using destructuring
  [arr[i], arr[j] = [arr[j], arr[i]]; //it is like [letters[0], letters[3]] = [letters[3], letters[0]]
  }
}
