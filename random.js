let data = [
  {name: "Raphel", gender: "male"},
  {name: "Tom", gender: "male"},
  {name: "Jerry", gender: "male"},
  {name: "Dorry", gender: "female"},
  {name: "Suzie", gender: "female"},
  {name: "Dianna", gender: "female"},
  {name: "Prem", gender: "male"},
];
function categorize (array) {
  return array.reduce((acc, item) => {
  acc[item.gender].push(item);
  return acc;
  },{'female':[], 'male':[]})
}
console.log(categorize(data))
