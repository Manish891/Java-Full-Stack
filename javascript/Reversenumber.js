function reverseNumber(num){
    let rev = 0;
    while (num > 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num/ 10);
    }
    return rev;
}
console.log(reverseNumber(2345));

console.log((8364/10).toFixed(0));
console.log(parseInt(84673/10));

