let num = process.argv[2];
let sum = 0;
let count = 0;
for (let i = 1;  i <= num; i++) {
    if (num % i === 0) {
        count++;
        sum += i
        console.log(`Factors of ${num} is : ${i}`);
    }
}
console.log(`Sum of Factors of ${num}: ${sum} and Count of factors is : ${count}`);