function removeVowels(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!'aeiouAEIOU'.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

let inputString = "Hello people welcome back to the show";
let result = removeVowels(inputString);
console.log(result);