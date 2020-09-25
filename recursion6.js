//Challenge 5
//Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
function pathFinder(obj, array) {
		//base case
  	if (array.length === 1) return obj[array[0]];

  	return pathFinder(obj[array[0]], array.slice(1))
}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const array = ["first", "second", "third"];
console.log(pathFinder(obj, array));   //-> "finish"
