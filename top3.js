let bandInfo;

// Put your code here
bandInfo = {
name: 'Horizon',
nationality: 'Australian',
genre: 'indie',
members: 4,
formed: 2018,
split: false,
albums: {
     album1: {
       name: 'Sunrise',
       released: 2018,
     },
    album2: {
     name: 'Dawn',
     released: 2020,
   },
}
}

console.log(bandInfo['albums']['album1']['name'])
