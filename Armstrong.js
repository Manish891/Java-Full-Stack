function isArmstrong(num) {
    const strNum = String(num);
    const length = strNum.length;
    let sum = 0;
    for (let i = 0; i<length;i++ ){
        sum = sum + Number(strNum[i]**length);
    }
    return sum === num;
}
console.log(isArmstrong(8));
