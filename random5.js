function reverseStr(str) {
  if (str === '') return '';
  return reverseStr(str.substring(1)) + str[0];
}
//console.log(reverseStr('This string is going to be reversed recursively'));

function reverse(str) {
  if (!str || str.length < 2) return str;
  return str.split('').reverse().join('');
}
//console.log(reverse('This string is going to be reversed recursively'));
String.prototype.reverse = function () {
  if (!this || this.length < 2) return this;
  console.log(this.split('').reverse().join(''));
};
//'abc'.reverse();

function reverseWord(sentence) {
  return sentence.split(' ').reverse().join(' ').split('').reverse().join('');
}
//console.log(reverseWord('I am the good boy'));
