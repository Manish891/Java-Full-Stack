function raisedPower(num) {
    let pow = process.argv[2];
    let sum = 0;
    while (num > 0){
        let rem = num % 10;
        sum = sum +(rem ** pow );
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(raisedPower(1234));
