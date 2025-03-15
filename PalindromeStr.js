function isPalindrome(str) {
    rev = str.split('').reverse().join('');
    if (rev == str) {
        return true
    }
    else {
        return false
    }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("kissik"));