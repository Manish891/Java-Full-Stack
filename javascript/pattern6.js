function patternInverseRightAngleTriangle(num) {
    let pattern = '';
    for (let row = 0; row < num; row++) {
        for (let col = 0; col < num - row; col++) {
            pattern += "_"; 
        }
        for (let col = 1; col <= row; col++) {
            pattern += "*"; 
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(patternInverseRightAngleTriangle(6));
