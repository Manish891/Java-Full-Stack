const odd = (value) => value % 2 != 0
const even = (value) => value % 2 == 0
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let double = numbers.map((value, index) => (value ** 2));
let odds = numbers.filter((value) => odd(value))
console.log(odds);
//console.log(numbers.filter(x => (x % 2 == 0)).map((x => x ** 2)));
//console.log(numbers.reduce((sum, i) => sum + i, 0));
console.log(numbers.filter(x => (x % 2 != 0)).map((x => x ** 2)).reduce((sum,x)=>sum+x));


