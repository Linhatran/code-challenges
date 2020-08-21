function findUniq(arr) {
  let result = '';
 for (i=0;i<arr.length;i++) {
   for (j=0;j<arr.length;j++) {
      (arr[i] !== arr[j]) ? result = arr[j] : 0;
   }
     return result;
 }
} 

findUniq([ 0, 1, 0 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([ 3, 10, 3, 3, 3 ]);
