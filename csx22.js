// ADD CODE HERE
function goodKeys (obj,callback) { //callback returns booleans
  let array = []
  const values = Object.values(obj)
  values.forEach(value => {
    if (callback(value)) array.push(Object.keys(obj).find(key => obj[key] === value))
  })
  return array
}
// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
