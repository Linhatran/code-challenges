function sumStrings(a,b) { 
  let arrayA = Array.from(a, Number) //turn into an array of individual string then turn each string into a digit
  let arrayB = Array.from(b, Number)
  
  let carry = 0;
  let result = []
  let i = Math.max(arrayA.length, arrayB.length)
  
  while (i--) {
    carry += ((arrayA.pop() || 0) + (arrayB.pop() || 0))
    result.unshift(carry % 10)
    carry = Math.floor(carry / 10)
  }
  while (carry) {
    result.unshift(carry % 10)
    carry = Math.floor(carry / 10)
  }
  if (result[0] === 0) {
    result.shift()
    return result.join('')
  } else return result.join('')
}

console.log(sumStrings('28193817387203829891992','73819398717193902037849950002')
