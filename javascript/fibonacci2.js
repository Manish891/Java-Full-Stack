function fibseries_02(num) {
    let a=0,b=1;
    let series=[a,b];
    for (let i=2;i<num;i++){
        series[i]=series[i-1]+series[i-2];
    }
    return series;
}
console.log(fibseries_02(10));