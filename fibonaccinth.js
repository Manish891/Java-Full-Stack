function nthFibonacciTerm(num) {
    if (num <= 1) return num;
    return nthFibonacciTerm(num - 1) + nthFibonacciTerm(num - 2)
}
console.log(nthFibonacciTerm(20));
