function pow(num) {
    if (num <= 0) {
        console.log("Invalid number");
        return;
    }
    while (num > 1) {
        if (num % 2 !== 0) {
            console.log("It is not a power");
            return;
        }
        num = num / 2;
    }
    console.log("It is a power");
}
pow(20);