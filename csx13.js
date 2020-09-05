
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]
const population = data.reduce((acc, val) => {
  return (val.country === 'China') ? acc : acc+val.pop;
}, 0) 

console.log(population)
