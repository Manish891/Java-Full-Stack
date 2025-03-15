let year = process.argv[2];
console.log("Enter the year is : ",year);
if (year % 4 == 0 && year % 400 != 0 && year % 100 != 0){
    console.log("Leap Year !")
}
else {
    console.log("Not A Leap Year !")
}

