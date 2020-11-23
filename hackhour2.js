/* 
Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******
*/

const drawStairs = (n) => {
  //if n is negative, return an empty string
  if (n <= 0) return '';
  let row = '';
  //outer for loop to draw (h)eight of stairs
  for (let h = 1; h <= n; h++) {
    //inner for loop to fill row with (s)paces
    for (let s = n - h; s > 0; s--) {
      row += ' ';
    }
    //inner for loop to fill row (w)idth with stars
    for (let w = 0; w < h - 1; w++) {
      row += '*';
    }
    //take out space after last row
    row += h < n ? '*\n' : '*';
  }
  console.log(row);
};
drawStairs(6);
/* 
Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.
Examples:
drawStar(1) ->
+
drawStar(3) ->
\|/
-+-
/|\
drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \
*/

const drawStar = (n) => {};

module.exports = { drawStairs, drawStar };
