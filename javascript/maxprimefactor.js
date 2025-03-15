function isPrimeMethod(num) {
    if (num < 2)
        return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function primeFactors(n) {
    const factors = [];
    let maxPrimeFactor = -1;
    while (n % 2 === 0) {
        factors.push(2);
        maxPrimeFactor = 2;
        n = n / 2;
    }
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            
                factors.push(i);
                maxPrimeFactor = i;
            
            n = n / i;
        }
    }
    if (n > 2) {
        factors.push(n);
        maxPrimeFactor = n;
    }
    return { primeFactors: factors, maxPrimeFactor: maxPrimeFactor };
}
console.log(primeFactors(500))