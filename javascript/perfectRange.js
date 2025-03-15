function findPerfectNumInRange(start,end) {
    function isPerfect(num) {
        let sum = 0;
        for (i = 1; i <= num / 2; i++){
            if (num % i == 0){
                sum = sum + i;
            }
        }
        return sum == num && num !== 0;
    }
    let perfectNumbers = [];
    for (let i = start; i <= end; i++){
        if(isPerfect(i)){
        perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}
console.log(findPerfectNumInRange(process.argv[2],process.argv[3]));

