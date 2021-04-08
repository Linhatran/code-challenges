/* 
Define an encoding format that can represent a JSON data structure as an array of single-line strings. Each JSON value primitive (e.g. number, string, boolean, null) should correspond to its own string entry in the output array. Other than those requirements, your encoding scheme can be anything you want. 

Create an `encode` function that takes JSON data input and outputs an array of strings in your encoding format. 

Create a `decode` function that takes the string array and transforms it back into the original JSON data structure. 
*/
// encode function 
// input: JSON
// output: an array of strings

//decode function
// input: an array of strings 
// output: JSON format 

// Sample input:
const sampleJson = {
  "car": {
    "color": "blue",
    "year": 1999,
    "broken": [
      "left mirror",
      "right door"
    ]
  },
  "lorry": 24
};
// declare a function def encode 
  // detemine input: parsed JSON /object 
  // separate keys - values 
  // declare a variable [strings] 
  // declare a variable: empty string to push key and value 
  // go through each key: check type of value: 
    // if type = string: concat it with key using '='
    // if type = array: access index and concat value with key at given index 

function encode (sampleJson, result = [], str='') {
   // store key-value pairs in an array
  const arr = Object.entries(sampleJson);
  
  // iterate through array of key-value pairs
  for (let i = 0; i < arr.length; i++) {
    // access the current array being iterated over
    const subArr = arr[i];
    // store the value of first index to be key
    const key = subArr[0];
    // store the value of second index to be value
    const value = subArr[1];
    // check type of values using helper function
    if (getNodeType(value) === 'object') {
      // if value is an object, save that to str
      str += `${key}/`
      // recursively check value to be object or not
       return encode(value, result, str)
    } else if (getNodeType(value) === 'primitive') {
    // concatinate with string
      const subStr = `${key}="${value}"`
      result.push(str + subStr)

    } else if (getNodeType(value) === 'array') {
    // access index
      value.forEach((el, i) => {
      const subStr =`${key}[${i}]="${el}"`
        result.push(str + subStr)
      })
    }
    
  }

 return result;
}
// console.log(encode(sampleJson))
// Sample output string array (remember this encoding is arbitrary and is up to you!):
const encodedSample = [
  'car/color="blue"',
  'car/year=1999',
  'car/broken[0]="left mirror"',
  'car/broken[1]="right door"'
];

function decode (array) {
  // declare a variable to store the final object
 const result = {};
  for (let i = 0; i < array.length; i++) {
    // declare a variable to store each string in the array
    let str = array[i];
    // split the string to separate key and values
   const splitBySlash = str.split('/');
    // key is the value before the '/'
    const key = splitBySlash[0];
    // value is after the slash which is another key-value pair connected by '=' so we split that again to get the pairs
    const pairs = splitBySlash[1].split('=');
    // check if the key (car) existed in the object
    if (!result[key]) {
    // if not, initialize a new key-value pair with value is an empty object 
      result[key] = {}
    // pairs[0]: a sub key, pairs[1]: value of that sub key
      result[key][pairs[0]] = JSON.parse(pairs[1])
      } else {
    // in case a key has existed in the object, we continue adding sub key-value pairs to it
    // check if a a sub key will be a key of an array by checking the last index of it it the end of a set [] or not
      if (pairs[0][pairs[0].length-1] !== ']') {
      // if it is not (the value will be primitive), add a new sub key-value pair
      result[key][pairs[0]] = JSON.parse(pairs[1])
      }  else {
      // if the sub key indicates that value will be an array
      const arrKey = pairs[0].split('[')[0]
      // check if that key of an array has existed, if no, initialize an array with the value, if yes, push the value to the array
      result[key][arrKey] ? result[key][arrKey].push(JSON.parse(pairs[1])) : result[key][arrKey] = [JSON.parse(pairs[1])];
      
      }
    };
    
  }
  return result
}
console.log(decode(encodedSample))
// Helper function to determine the leaf node type of a JSON value.
//   nodeType({})    // 'object'
//   nodeType([])    // 'array'
//   nodeType(null)  // 'primitive'
//   nodeType('str') // 'primitive'
//   nodeType(123)   // 'primitive'
//   nodeType(true)  // 'primitive'
function getNodeType(value) {
  if (value === null)
    return 'primitive'
  if (Array.isArray(value))
    return 'array'
  if (typeof value === 'object')
    return 'object'
  else
    return 'primitive'
}

