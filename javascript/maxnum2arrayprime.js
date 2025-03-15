function isPrimeMethod(num) {
    if (num < 2)
        return false; 
    for (let i = 2;i<=num/2;i++){
    if (num % i === 0){
        return false;
}
}
     return true;

 }
 function secondmaxNumisPrime(arr) {
    if (arr.length < 2)
        return null;
    let numArr = arr.map(Number);
    let max = -Infinity, secondMax = -Infinity;
    for (let num of numArr){
        if (num > max){
            secondMax = max;
            max = num;
        }
        else if (num > secondMax && num < max){
            secondMax = num;
        }
    }
    if (secondMax === -Infinity)
        return null;
    return isPrimeMethod(secondMax);
 }
 console.log(secondmaxNumisPrime(['2', '4', '7', '10']));
 