function timeConverter(s) {
  let newS = s.split(':'); //mm:ss
  let hh = newS.shift() 
 
  if (s.includes('P')) {
    hh = (Number(hh) + 12).toString();
    newS.unshift(hh)
    return newS.join(':').substr(0,8)
  }
}
console.log(timeConverter('07:05:45PM'))
