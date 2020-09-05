// ADD CODE HERE
function prioritize (arr,cb) {
  let t = [] //true array
  let f = [] //false array
  arr.forEach(str => cb(str) ? t.push(str) : f.push(str))
  return t.concat(f)
  
}
// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
