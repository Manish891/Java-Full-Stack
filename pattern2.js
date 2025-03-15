function patternInverseRightAngleTriangle(num) {
    let pattern = '';
    for (let row = 0; row < num; row++) {
        for (let col = num; col > row; col--) {
            pattern += "*";
        }
        pattern += '\n';
    }
    return pattern;
}
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
console.log(patternInverseRightAngleTriangle(6));
console.log(patternRightAngleTriangle(6)); 

