/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/
//highest profit: buy lowest, sell highest, lowest before highest

const highestProfit = (arr) => {
  //   let profit = 0;
  //   let minIndex = 0;
  //   if (!arr || arr.length === 0) return 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < arr[minIndex]) minIndex = i;
  //     if (arr[i] - arr[minIndex] > profit) profit = arr[i] - arr[minIndex];
  //   }
  //   return profit;
  if (!arr) return 0;
  let minPrice = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) minPrice = arr[i];
    let currProfit = arr[i] - minPrice;
    if (currProfit > maxProfit) maxProfit = currProfit;
  }
  return maxProfit;
};
console.log(highestProfit([1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100]));
