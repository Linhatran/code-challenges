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
