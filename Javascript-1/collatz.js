function collatz(num) {
    let result = [num];
    while (num != 1){
        if (num % 2 == 0){
            num = num / 2;
            result.push(num)
        }
        else{
            num = 3 * num + 1;
            result.push(num)
        }
       
    }  
    return result;
}
console.log(collatz(12));
