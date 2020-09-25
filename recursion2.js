//Challenge 10
//Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.

function getRangeBetween(x, y) {
	//base case x + 1 >= y
  let array = [x+1]
  if (x+2 >= y ) {return array}
  //recursive call
  return array.concat(getRangeBetween(x+1,y))
}
// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
