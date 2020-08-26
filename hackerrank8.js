function getLetter (s) {
  switch (s[0]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      return 'B';
      break;
    case 'h':
    case 'k':
    case 'j':
    case 'l':
    case 'm':
      return 'C';
      break;
    default:
      return 'D';
  }
}
       
console.log(getLetter('adfgt'));
