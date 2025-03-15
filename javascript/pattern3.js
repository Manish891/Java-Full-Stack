function patternInverseRightAngleTriangle(num) {
    let pattern = '';
    for (let row = 0; row < num; row++) {
        for (let col = num; col > 0; col--) {
            pattern += "*";
        }
        pattern += '\n';
    }
    return pattern;
}

console.log(patternInverseRightAngleTriangle(6));

