function swapNumber (a,b) {
console.log(`Before: a is ${a}, b is ${b}`); //a is 6, b is 8
b = b-a;// 8 - 6 = 2
a = a+b; //6 + 2 = 8
b = a-b//8 - 2 = 6
console.log(`After: a is ${a}, b is ${b}`) //a is 8, b is 6
}
console.log(swapNumber(6,8))
