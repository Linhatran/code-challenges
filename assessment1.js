function capitalizeVowels (str) {
    if (str.length === 0) return 'Please pass in a valid string!';
    const vowels = 'ueoai';
    for (let char of str) {
        if (vowels.includes(char)) {
            str = str.replace(char, char.toUpperCase())
        }
    }
    return str;
};
console.log(capitalizeVowels('hella world'))

function reverseChunk (arr, start, end) {
    if (arr.length === 0) return 'Please pass in a valid array';
    let toReverseArr = arr.slice(start,end+1);
    return [...arr.slice(0,start), ...toReverseArr.reverse(), ...arr.slice(end+1)];
};

function snakeToCamel (str) {
    if (str.length === 0) return 'Please pass in a valid string';
    const arr = str.split('_');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    };
    return arr.join('');
}

function objToSortedArray (obj) {
  const result = [];
  const sortedNames = Object.keys(obj).sort();
  for (let name of sortedNames) {
    const pair = [name, obj[name]]
    result.push(pair)
  }
  return result;
};
