function sumOfFactors(num) {
    let sum = 0;
    for (var i = 1; i<= num / 2; i++){
        if (num % i === 0){
            sum = sum +i;
        }
    }
    return sum;
}
function isAmicablePairs(num1,num2) {
    let sum1 = sumOfFactors(num1);
    let sum2 = sumOfFactors(num2);
    return sum1 === num2 && sum2 === num1;
}
console.log(isAmicablePairs(220,284));
