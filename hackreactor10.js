var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
    let classListWithAges = [];
    
  // creates an object for each string in the input array, with an age of 10 or 11
  for (let i = 0; i < classList.length; i++) {
    let obj = {}
    obj["name"] = classList[i];
    obj["age"] = getRandomIntInclusive(10, 11);
    classListWithAges.push(obj)
  }
  // returns an array of these objects
 return classListWithAges
}
console.log(decorateClassListWithAges(classList))
