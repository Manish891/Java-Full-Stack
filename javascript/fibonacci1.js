function fibseries_01(num) {
    let a = 0, b = 1;
    let series = [];
    while (a <= num) {
        series.push(a);
        let c = a + b;
        a = b;
        b = c;
    }
    return series;
}
console.log(fibseries_01(10));








