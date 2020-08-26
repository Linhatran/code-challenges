function getGrade(s) {
  if (s > 30) {return null}
  if (0 <= s && s <= 5) {return 'F'}
  else if (5 < s && s <= 10) {return 'E'}
  else if (10 < s && s <= 15) {return 'D'}
  else if (15 < s && s <= 20) {return 'C'}
  else if (20 < s && s <= 25) {return 'B'}
  else return 'A'
}
