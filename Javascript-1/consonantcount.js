function countConsonant(str) {
    let countConsonant = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== " ") {
            countConsonant++;
        }
    }
    return countConsonant;
}
console.log(countConsonant("closed"));