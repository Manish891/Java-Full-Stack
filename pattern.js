function patternRightAngleTriangle(num) {
    let pattern = '';
    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            pattern += "*";
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(patternRightAngleTriangle(6));
