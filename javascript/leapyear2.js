let a = process.argv[2];
console.log("Enter the year is : ",a);
if (a % 4 == 0){
    if (a % 100 == 0 && a % 400 != 0){
    console.log(`Not A Leap Year !`)
}
else {
    console.log(`Leap Year !`)
}
} else{
    console.log(`Leap Year !`)
}