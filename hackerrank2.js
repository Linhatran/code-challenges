function getDiff(...arr) {
  let sumLTR = 0;
  let sumRTL = 0;
  let n = arr.length;
  for (let i = 1; i <= n; i++) {
    sumLTR += arr[n-i][n-i];
  }
  for (let i = 1, j = n; i <= n, j >=1; i++, j--) {
    sumRTL += arr[n-j][n-i];
  }
  return Math.abs(sumLTR-sumRTL);
}
console.log(getDiff([30,0,40],[0,1,0],[25,0,30]));
