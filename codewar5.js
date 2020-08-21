function rgb(r,g,b) {
  let r1,r2,g1,g2,b1,b2;
  r1 = Math.floor(r/16);
  g1 = Math.floor(g/16);
  b1 = Math.floor(b/16);
  r2 = (r/16 - r1)*16;
  g2 = (g/16 - g1)*16;
  b2 = (b/16 - b1)*16;

  const letter = ['A','B','C','D','E','F'];
  const num = [10,11,12,13,14,15];
  let X = num.indexOf(b2);
  b2 = letter[X];
    console.log(`${r1} ${r2} ${g1} ${g2} ${b1} ${b2}`);
}
