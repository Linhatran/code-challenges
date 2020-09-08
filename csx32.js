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

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
