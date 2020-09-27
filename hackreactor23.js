function splitPairs(input) {
  // your code here
  let output = [];
  for (let i = 0; i < input.length; i+=2) {
    let first = input[i];
    let second = input[i+1] || '_'
    let value = first+second;
    output.push(value)
  }
  return output;
}
console.log(splitPairs('endurance')) //[ 'en', 'du', 'ra', 'nc', 'e_' ]
