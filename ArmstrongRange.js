function isArmstrong(num) {
    const strNum = String(num);
    const length = strNum.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum = sum + Number(strNum[i]) ** length;
    }
    return sum === num;
}
console.log(isArmstrong(8));

function findArmstrongNumInRange(numberArr, startRange, endRange) {
    return numberArr.filter(num => num >= startRange && num <= endRange && isArmstrong(num));
}
console.log(findArmstrongNumInRange([0, 8, 16, 45, 153, 371, 9474], 10, 10000));
