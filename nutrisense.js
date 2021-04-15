/**
 * 
Game Mechanisms
This will be a single player game with a player and computer
A computer places all of the ships randomly on a 10x10 board
The player will make up to 50 moves attempting to sync the ships. If they do not sink all of the ships in this time, they lose.

Ship Information
Ignore the ships in the graphic above.
We have ships of five sizes:
1
2
3
4
5
There are two ships of size 1
There are two ships of size 2
There is one of every other ship size

 */
const board = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

function startGame() {
  // clear board
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j] = null;
    }
  }
  return board;
}
function placeShips() {
  const sizes = [1, 1, 2, 2, 3, 4, 5];

  for (let i = 0; i < 7; i++) {
    let size = sizes[i];
    placeShip(size);
  }
  return board;
}
function placeShip(size) {
  const direction = [0, 1][Math.floor(Math.random() * 2)];
  let x, y;
  if (direction === 0) {
    x = Math.floor(Math.random() * (10 - size));
    y = Math.floor(Math.random() * 10);
    let array = board[y];
    if (checkShips(direction, x, y, size)) {
      for (let i = x; i < x + size; i++) {
        array[i] = size;
      }
    } else return placeShip(size);
  } else {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * (10 - size));

    if (checkShips(direction, x, y, size)) {
      for (let i = y; i < y + size; i++) {
        board[i][x] = size;
      }
    } else return placeShip(size);
  }
}
function checkShips(direction, x, y, size) {
  if (direction === 0) {
    for (let i = x; i < x + size; i++) {
      console.log('x', i, 'y', y, 'square', board[y][i], 'size', size);
      if (board[y][i] !== null) return false;
    }
    return true;
  } else {
    for (let i = y; i < y + size; i++) {
      console.log('x', x, 'y', i, 'square', board[i][y], 'size', size);
      if (board[i][x] !== null) return false;
    }
    return true;
  }
}

console.table(placeShips());
