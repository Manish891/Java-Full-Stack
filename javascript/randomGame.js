function randomnum() {
    let givennum = process.argv[2];
    let sysnum = Math.floor(Math.random() * 10);
    console.log("System Number is = " + sysnum);
    if (givennum == sysnum) {
        return "You have won the game";
    } else {
        return "You have lost the game,Try again";
    }
}
console.log(randomnum());