function generateHashtag (str) {
  let splitStr = str.split(' ');
  let newStr = splitStr.filter(word => word !== '')
  if (newStr.join('').length === 0 || newStr.join('').length >= 140) return false;
  let result = '#';
  for (let i = 0; i < newStr.length; i++) {
    let firstLetter = newStr[i][0];
    result += newStr[i].replace(firstLetter, firstLetter.toUpperCase())
  }
  return result;

}
