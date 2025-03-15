const str = 'US halts tariffs on Canada, Mexico for 30 days.';
const words = str.split(' ');
console.log(words[4]);
const chars = str.split('');
console.log(chars[0]);
const strCopy = str.split(' ');
console.log(strCopy);
console.log(str.slice(-9));
console.log(str.substring(3,8));
let revStr = '';
for (let i = str.length - 1;i>=0;i--){
      revStr +=str[i]
}
console.log(revStr);

console.log(str.split('').reverse().join(''));




