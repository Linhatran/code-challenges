function stair(n) {
  for (let i = 1; i<=n; i++) {
    let step = '';
     for (let k = n-i; k > 0; k--) {
      step+=' '
    }
    for (let j = 1; j <= i; j++) {
      step+='#'
    }
    console.log(step)
  } 
}
console.log(stair(5))
