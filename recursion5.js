// Challenge 3
function palindrome(string) {
  	let regex = /[a-z]/g
  	string = (string.toLowerCase())
  	let modifiedStr = string.match(regex).join('')
    
		let first = modifiedStr[0]
    let last = modifiedStr[modifiedStr.length-1]
    
    if (modifiedStr.length <= 1) return true;
  	if (first === last) {
      return palindrome(modifiedStr.substring(1, modifiedStr.length-1))
    }
  	return false
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false
