function objectFilter(obj, callback) {
		let result = {};
  	let keys = Object.keys(obj)
    let values = Object.values(obj)
    keys.forEach((key,i) => {
      if (callback(key) === values[i]) {
      result[key] = values[i]
      }
    })
  return result
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
