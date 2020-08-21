//first attempt
function round(x) {
  if (x>255) {return x=255;}
  if (x<0) {return x=0;}
  else return x;
}

function rgb(r,g,b) {
  let r1,r2,g1,g2,b1,b2;
  r = round(r);
  g = round(g);
  b = round(b);
  console.log(r,b,g);
  r1 = Math.floor(r/16);
  g1 = Math.floor(g/16);
  b1 = Math.floor(b/16);
  r2 = (r/16 - r1)*16;
  g2 = (g/16 - g1)*16;
  b2 = (b/16 - b1)*16;
  //create an array of r1r2g1g2b1b2
  let hex = [r1,r2,g1,g2,b1,b2];
  const letter = ['A','B','C','D','E','F'];
  const num = [10,11,12,13,14,15];
  //loop through it to find value > 9 
  for (i=0;i<hex.length;i++) {
    for(j=0;j<hex.length;j++) {
    //if value > 9, turn into letter
    if (hex[i]===num[j]) {
      hex[i]=letter[j];
     }
    }
  }
    return hex.join('');
}

//second attempt 
function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase();
}
function rgb(r,g,b) {
  return toHex(r) + toHex(g) + toHex(b);
}
