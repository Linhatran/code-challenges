var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
function renderInventory(inventory) {
  let list = '';
	for (let obj of inventory) {
        for (let shoes of obj.shoes) {
        list += `${obj.name}, ${shoes.name}, ${shoes.price}\n`
    }
  }
  return list;
}
console.log(renderInventory(currentInventory))

function calculateAveragePricePerDesigner(inventory) {
		let result = {
      'designers' : []
    }
    for (let designer of inventory) {
      let obj = {};
      obj['name'] = designer.name;
      obj['averagePrice'] = getAveragePrice(designer.shoes)
      result['designers'].push(obj)
    }
   return result
}

function getAveragePrice(arrayOfShoes) {
  let average;
  let sum = 0;
  for (let shoes of arrayOfShoes) {
    sum += shoes.price;
  }
  return average = sum/arrayOfShoes.length
}

console.log(calculateAveragePricePerDesigner(currentInventory))
// result = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// }

function listAllBlackShoes(arrayOfShoes) {
  let list = [];
  for (let designer of arrayOfShoes) {
    for (let shoes of designer.shoes) {
      list.push(`${designer.name}, ${shoes.name}, ${shoes.price}`)
    }
  }
  return list.filter(shoes => shoes.includes('black'));
}
console.log(listAllBlackShoes(currentInventory))

function generateLaceDetails(array) {
  let result = [];
  let lacedShoes = [];
  for (let designer of array) {
    for (let shoes of designer.shoes) {
    	(shoes.name.includes('lace')) ? lacedShoes.push(shoes.name) : null;
    }
  }
  for (let name of lacedShoes) {
    let obj = {};
    let match = name.split(' ').filter(word => word.includes('lace'))
  	obj['nameWords'] = name.split(' ');
    obj['targetWordIndex'] = name.split(' ').indexOf(...match)
    result.push(obj)
  }
  return result;
}
console.log(generateLaceDetails(currentInventory))

[
//   { 
//     nameWords: ['tasselled', 'black', 'low-top', 'lace-up'], 
//     targetWordIndex: 3 
//   }, 
//   { 
//     nameWords: ['tasselled', 'green', 'low-top', 'lace-up'], 
//     targetWordIndex: 3 
//   }, 
//   { 
//     nameWords: ['red', 'leather', 'laced', 'sneakers'], 
//     targetWordIndex: 2 
//   }, 
//   { 
//     nameWords: ['black', 'leather', 'laced', 'sneakers'], 
//     targetWordIndex: 2 
//   }
// ]
