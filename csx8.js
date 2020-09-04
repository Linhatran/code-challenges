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


let friendsAvailable = true;

function makePlans(name) {
  // INSERT CODE HERE
  return callFriend(friendsAvailable,name)
}

function callFriend(bool, name) {
  // INSERT CODE HERE
  if (bool) {
    return `Plans made with ${name} this weekend`
  } else {
    return `Everyone is busy this weekend`
  }
}

// Uncomment these to check your work!
console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
