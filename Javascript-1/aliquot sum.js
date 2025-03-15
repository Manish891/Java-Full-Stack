let j = 24;
let sum = 0;
for (let i = 1; i < j; i++) {
    if (j % i == 0) {
        console.log(i);
        sum += i;
    }
}
console.log(sum);
