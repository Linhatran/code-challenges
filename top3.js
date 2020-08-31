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

console.log(`Please welcome our newest ${bandInfo['genre']} band today: ${bandInfo['name']}!!! All ${bandInfo['members']} members traveled all the way from ${bandInfo['nationality']} to perform the last two very successful albums: ${bandInfo['albums']['album1']['name']} (${bandInfo['albums']['album1']['released']}) and ${bandInfo['albums']['album2']['name']} (${bandInfo['albums']['album2']['released']})!`)
