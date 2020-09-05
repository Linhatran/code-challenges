// ADD CODE HERE
const pluralize = (arr) => {
  return arr.map(word => `${word}s`)
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
