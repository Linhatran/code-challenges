function createSecretHolder(secret) {
		let obj = {};
  	function getSecret() {
      return secret;
    }
  	function setSecret(newSecret) {
      secret = newSecret;
    }
  	obj['getSecret'] = getSecret;
  	obj['setSecret'] = setSecret;
  	return obj;
}

// /*** Uncomment these to check your work! ***/
let obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
console.log(obj.setSecret(2))
console.log(obj.getSecret()) // => returns 2
