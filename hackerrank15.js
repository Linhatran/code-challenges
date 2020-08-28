function timeConverter(s) {
  let newS = s.split(':'); //mm:ss
  let hh = newS.shift() 
 
  if (s.includes('P')) {
    if (hh === '12') {hh = '12'}
      else if (hh !== '12') {
    hh = (Number(hh) + 12).toString();
    }
    newS.unshift(hh)
    return newS.join(':').substr(0,8)
  } 
  else if (s.includes('A')) {
    if (hh === '12') {hh = '00'}
    newS.unshift(hh)
    return newS.join(':').substr(0,8)
  }
}
console.log(timeConverter('12:05:45AM')) //00:05:45
console.log(timeConverter('12:45:54PM')) //12:45:54
