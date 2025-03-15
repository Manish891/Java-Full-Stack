function asciiSum(str) {
    let sum = 0; 
    for (let i = 0; i < str.length; i++) {
        sum = sum + str.charCodeAt(i); 
    }
    return sum;
}
console.log(asciiSum("Hello people welcome back to the show")); 