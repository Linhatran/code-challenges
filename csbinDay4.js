// array of objects
//May 1st 2013: 
// bitcoinData.forEach(obj => {
//   if (obj['date'] === '2013-05-01') {
//     console.log(obj)
//   }
// })
//array with date and price of each day using map
// let dateAndPrice = bitcoinData.map(obj => {
//   console.log(`Date: ${obj["date"]}, Price: $${obj["price(USD)"]}`)
// })
// //console.log(dateAndPrice);

//array only has days when exchange volume !== 0
let nonZero = bitcoinData.filter(obj => {
  if (obj["exchangeVolume(USD)"] !== 0) {
    return obj.date;
  }
});
//console.log(nonZero)

// //calculate generatedCoin using reduce 
// let generatedCoin = bitcoinData.reduce((total, currentObj) => total += currentObj.generatedCoins,0)
// console.log(generatedCoin)           

//find num of days that price > 100
// let days = bitcoinData.filter(obj => obj["price(USD)"] > 100);
// console.log(days.length);

// //average transaction fees
let average = bitcoinData.map(obj => obj.fees).reduce((a,b) => a+b);
console.log(average)

                   
