function drawStairs(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n-i); //make space for each row, spaces decrease
    let stars = '*'.repeat(i);//stars increase for each row
    console.log(spaces + stars); //how each row will appear
  }
}
console.log(drawStairs(5))
