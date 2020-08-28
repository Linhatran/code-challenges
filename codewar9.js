function toCamelCase(str){
  let camelCase = [];

  if (str.includes('-')) {str = str.split('-');}
  else if (str.includes('_')) {str = str.split('_');}
  
  camelCase.push(str[0]);
  for (let i = 1; i < str.length; i++) {
   camelCase.push(str[i].replace(str[i][0], str[i][0].toUpperCase()));
  }
  return camelCase.join('');
}
