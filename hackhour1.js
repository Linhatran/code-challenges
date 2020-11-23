/*
Write a function that returns an array containing the numbers 1 to NUM.
Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.
fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]
*/

const fizzbuzz = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += 'fizz';
    }
    if (i % 5 === 0) {
      str += 'buzz';
    }
    result.push(str || i);
  }
  return result;
};

console.log(fizzbuzz(16));
/*
Extension: 
Write a function that returns an array containing the numbers 1 to NUM.
Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.
fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]
*/

const fizzbuzzbazz = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 7 === 0 && i % 3 === 0) {
      //divisble by 5 and 7 and 3
      arr.push('fizzbuzzbazz');
    } else if (i % 5 === 0 && i % 7 === 0 && i % 3 !== 0) {
      //divisble by 5 and 7 but not 3
      arr.push('buzzbazz');
    } else if (i % 3 === 0 && i % 7 === 0 && i % 5 !== 0) {
      //divisble by 3 and 7 but not 5
      arr.push('fizzbazz');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
      //(divisble by 3 and 5) but not 7
      arr.push('fizzbuzz');
    } else if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 === 0 && i % 7 !== 0)) {
      // divisble by 3 but (not by 5 or 7)
      arr.push('fizz');
    } else if (i % 5 === 0 && (i % 3 !== 0 || i % 7 !== 0)) {
      //divisble by 5 but (not by 3 or 7)
      arr.push('buzz');
    } else if (i % 7 === 0 && (i % 3 !== 0 || i % 5 !== 0)) {
      //divisble by 7 but (not by 3 or 5)
      arr.push('bazz');
    } else {
      arr.push(i);
    }
  }
  return arr;
};
console.log(fizzbuzzbazz(22));

module.exports = { fizzbuzz, fizzbuzzbazz };
