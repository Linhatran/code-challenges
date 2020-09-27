function highestScoringWord(string) {
  //string.toLowerCase()
  //split string into array of words
  //loop through array to examine word 
  string = string.toLowerCase();
  let arrayOfWords = string.split(' ');
  let arrayOfPoints = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfPoints.push(calculatePoints(arrayOfWords[i]))
  }
  let highestPoint = Math.max(...arrayOfPoints)
  let indexOfHighestPoint = arrayOfPoints.indexOf(highestPoint);
  return arrayOfWords[indexOfHighestPoint]
}

console.log(highestScoringWord('hello I miss You'));
//97-122 a-z, point = charCode - 96
function calculatePoints(string) {
  let points = 0;
  for (let i = 0; i < string.length; i++) {
    points += (string.charCodeAt(i)-96)
  }
  return points;
}
