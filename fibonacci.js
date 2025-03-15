function fibonacci(num) {    
    let a = 0;
    let b = 1;
    let sum;
    for (i = 1; i <= num - 1; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}
console.log(fibonacci(10));
console.log(fibonacci(4));
console.log(fibonacci(2));





