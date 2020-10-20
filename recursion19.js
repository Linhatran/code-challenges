function headsOrTails(n, array=[['heads'],['tails']]) {
  if (n===1) return array ;
  let newArray = [];
  array.forEach(el => {
    newArray.push(el.concat('heads'));
    newArray.push(el.concat('tails'));
  })
  return headsOrTails(n-1, newArray);
}
console.log(headsOrTails(3))


