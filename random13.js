// greedy algorithm

function makeChange (coins, amount) { //5,10,25
  coins.sort((a,b) => b-a);
  let i = 0; 
  let coinsTotal = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount = amount-coins[i];
      coinsTotal++;
    } else {
      i++;
    }
  }
  return coinsTotal;
}
console.log(makeChange([5,25,10], 50))

//brute force solution with recursion 
function makeChange (coins, amount) {
  if (amount === 0) return 0;
  let minCoins;
  coins.forEach((coin) => {
    if (coin <= amount) {
      let currentMinCoin = makeChange(coins, amount-coin)
      if (minCoins === undefined || currentMinCoin < minCoins) {
        minCoins = currentMinCoin;
      }
    }
  })
  return minCoins + 1;
}
console.log(makeChange([5,25,10], 50))
