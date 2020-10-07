function countChar(input, target, index = 0) {
  let count = 0;
  if (!input[index]) return count;
  if (input[index] === target) {
    count++;
  }
  return count + countChar(input, target, index+=1)
}
console.log(countChar('Linh Tran', 'n'))

//do not use loops or built in methods
