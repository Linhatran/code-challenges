function gradingStudents(grades) {
    // Write your code here
      let result = [];
  for (let i = 0; i <grades.length; i++) {
    if (grades[i] < 38 || (grades[i] % 5 < 3)) { 
      result.push(grades[i]);
    }
    if (grades[i] >= 38 && grades[i] % 5 > 2 ) { 
      result.push(grades[i]+(5-(grades[i] % 5)));
    }   
  } 
  return result;
}
