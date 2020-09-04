let calls = "";

function jerry(str) {
	//concat str 
  str +='Jerry'
  //return result of kramer
  return kramer(str)
}

function george(str) {
	str+='George';
  return elaine(str)
}

function elaine(str) {
	str+= 'Elaine';
  return str
}

function kramer(str) {
	str+='Kramer';
  return george(str)
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
