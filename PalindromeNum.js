function Palindrome(num) {
let rev = 0;
    
    let temp = num;

    while (num > 0) 
        {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    
}
if (rev == temp) 
    {
    return true
}
else {
    return false
}
}
console.log(Palindrome(454))
