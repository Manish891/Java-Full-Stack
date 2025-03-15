function patternInverseRightAngleTriangle(num) {
    let pattern = '';
    for (let row = 0; row < num; row++) {
        for (let space = 0; space < row; space++) {
            pattern += " " ;
        }
        for (let col = num; col > num - row; col--) {
            pattern += "*" ;
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(patternInverseRightAngleTriangle(6));