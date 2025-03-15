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
function maxNumisPrime(arr) {
    if (arr.length === 0)
        return false
    let numArr = arr.map(Number);
    let maxNum = Math.max(...numArr);
    return isPrimeMethod(maxNum);
}
console.log(maxNumisPrime(['4', '7', '11', '13']));
