// ADD CODE HERE
function censor () {
  let obj = {}
  return function (stringOne, stringTwo) { //accept one or two strings
    if (stringTwo) {
     obj[stringOne] = stringTwo;
    	return 
    } 
    Object.keys(obj).forEach(key => {
    stringOne = stringOne.replace(key, obj[key])
      })
    return stringOne
    }
  }

<----------------------------------------->
  function censor() {
  let first = []; //quick, dogs
  let second = []; //slow, cats
	return function (...strings) {
    if (strings.length === 2) {
      first.push(strings[0]);
      second.push(strings[1]);
    } else if (strings.length === 1) {
    	strings = strings.toString();
      for (let i = 0; i < first.length; i++) {
        if (strings.includes(first[i])) {
          strings = strings.replace(`${first[i]}`, `${second[i]}`)    
        }
      }
      return strings;
    }
  }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
