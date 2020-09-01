function appleOrange(s,t,a,b,m,n,apple,orange) {
  //m: apple.length, n: orange.length, s: start, t: end, a: apple position, b: orange position
  let newApple = [];
  let aCount = 0, oCount = 0;
  let newOrange = [];
  for (let i = 0; i < m; i++) {
    newApple.push(apple[i] + a)
    if (newApple[i] >= s && newApple[i] <= t) {aCount++}
  }
  for (let j = 0; j<n; j++) {
    newOrange.push(orange[j] + b) 
    if (newOrange[j] >= s && newOrange[j] <= t) {oCount++}
  }
  return (aCount, oCount)
}
console.log(appleOrange(7,11,5,15,3,2,[-2,2,1],[5,-6]))
