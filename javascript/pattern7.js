function hallowSquare(num) {
    let pattern = " ";
    for (let row = 0; row < num; row++) {
        for (col = 0; col < num; col++) {
            if (row == 0 || col == 0 || col == num - 1 || row == num - 1) {
                pattern += "*";
            }
            else {
                pattern += " ";
            }
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(hallowSquare(6));
