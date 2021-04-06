/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = (grid) => {
  const cols = grid[0].length;
  const rows = grid.length;
  const visited = new Array(rows)
    .fill(null)
    .map((_) => new Array(cols).fill(false));
  const queue = [{ r: 0, c: 0, dist: 0 }];

  const markVisited = (r, c, dist) => {
    if (!visited[r][c] && grid[r][c] !== 1) {
      visited[r][c] = true;
      queue.push({ r, c, dist });
    }
  };
  while (queue[0]) {
    let { r, c, dist } = queue.shift();
    if (grid[r][c] === 2) return dist;
    dist++;
    // check top
    if (r > 0) markVisited(r - 1, c, dist);
    // check bottom
    if (r < rows - 1) markVisited(r + 1, c, dist);
    // check left
    if (c > 0) markVisited(r, c - 1, dist);
    // check right
    if (c < cols - 1) markVisited(r, c + 1, dist);
  }
  // if cannot find 2
  return -1;
};
console.log(
  minimumDistance([
    [0, 0, 1, 1],
    [0, 0, 1, 2],
    [1, 0, 0, 0],
  ])
);
