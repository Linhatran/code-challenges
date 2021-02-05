/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {
  const maxRow = grid.length;
  const maxCol = grid[0].length;
  if (maxRow === 0) return 0;
  let islandNums = 0;
  const visitIsland = (r, c) => {
  if (r < 0 || r >= maxRow || c < 0 || c >= maxCol) return;
  if (grid[r][c] !== 1) return;
  if (grid[r][c] === 1) grid[r][c] = 'X';
  visitIsland(r+1, c);
  visitIsland(r-1, c);
  visitIsland(r, c-1);
  visitIsland(r, c+1);
}
  for (let r = 0; r < maxRow; r++) {
    for (let c = 0; c < maxCol; c++) {
      let current = grid[r][c];
      if (current === 1) {
        islandNums++;
        visitIsland(r,c)
      } 
    }
  }
  return islandNums;
};
console.log(
  numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
);
module.exports = {numIslands};
