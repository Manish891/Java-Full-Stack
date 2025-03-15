function patternInverseRightAngleTriangle(num) {
    let pattern = '';
    for (let row = 0; row < num; row++) {
        for (let space = 0; space < num - row; space++) {
            pattern += " " 
        }
        for (let col = 1; col <= row; col++) {
            pattern += "*"
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(patternInverseRightAngleTriangle(6));