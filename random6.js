function firstNonRepeatChar(str) {
  let exists = {};
  str = str.match(/[A-Za-z]/g);
  str.forEach((el) => {
    if (!exists[el]) {
      exists[el] = 1;
    } else {
      exists[el]++;
    }
  });
  for (let key in exists) {
    if (exists[key] === 1) {
      return key;
    }
  }
}
//console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));
