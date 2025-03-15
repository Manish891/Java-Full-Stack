function nextPalindrome(num) {
    let strNum = num.toString();
    function Palindrome(i) {
        return i === i.split('').reverse().join('');
    }
    while (true){
        num++;
        strNum = num.toString();
        if (Palindrome(strNum)){
            return num;
        }
    }
}
console.log(nextPalindrome(process.argv[2]));

