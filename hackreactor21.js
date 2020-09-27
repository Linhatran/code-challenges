function checkWinner(array) {
  //join array 
  //check if string includes 'blackblackblackblack' => return blackwins and vice versa
  let arrayToString = array.join('');
  if (arrayToString.includes('blackblackblackblack')) {
    return 'Black Wins!';
  } else if (arrayToString.includes('redredredred')) {
    return 'Red Wins!';
  } else {
    return 'Draw!';
  }
}




let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'
