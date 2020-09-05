function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < array1.length; i++) {
    (array2[i] % 2 !== 0) ? oddSum += array2[i] : evenSum += array2[i]
  }
  for (let i = 0; i < array1.length; i++) {
     (array1[i] < 10) ? array1[i] += oddSum : array1[i] += evenSum
  }
  for (let i = 0; i < array1.length; i++) {
     (array2.some(num => num > 20)) ? array1[i] += 1 : array1[i] += 0
  }
  return array1
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
