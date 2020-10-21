function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * array.length)
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    return array;
}

function shuffleTests() {
  console.log(shuffle([1, 2, 3, 4, 5]), ' -> ?');
  console.log(shuffle([10, 4, 7, 6, 1]), ' -> ?');
  console.log(shuffle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> ?');
}

//shuffleTests() // Determine a way to test this function!
