function reverseInt(int) {
    let string = int.toString();
    if (string.length <= 0) return string;
    return parseInt(reverseInt(string.slice(1)) + string[0])
}

function reverseIntTests() {
  console.log(reverseInt(1234), ' -> ', 4321);
  console.log(reverseInt(1), ' -> ', 1);
  console.log(reverseInt(87654), ' -> ', 45678);
  console.log(reverseInt(13542), ' -> ', 24531);
}

reverseIntTests() // uncomment to test
