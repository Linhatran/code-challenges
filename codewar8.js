function bouncingBall(h,  bounce,  window) {
  // your code here
  let count = 0;
  let bouncingHeight = h;
  if (h<=0 || bounce <= 0 || bounce >= 1 || window >= h) {return -1;}
  for (let i=0; i<h;i++) {
    bouncingHeight = bouncingHeight*bounce;
    if (bouncingHeight > window) {count++;}
  } 
  return ((count*2)+1);
}
