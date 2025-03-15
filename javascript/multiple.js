let maxnumber = process.argv[2]
console.log(`${maxnumber} is the greatest of all numbers`);

var result = "";
if (maxnumber % 3 === 0) {
    result += "fizz";
}
if (maxnumber % 5 === 0) {
    result += "buzz";
}
console.log(`${result}`);
