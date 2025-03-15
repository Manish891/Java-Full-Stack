let num = process.argv[2];

if (num % 7 === 0) {
    console.log("Sunday");   
}
else if(num % 7 === 1 ){
    console.log("Monday"); 
}
else if(num % 7 === 2 ){
    console.log("Tuesday"); 
}
else if(num % 7 === 3 ){
    console.log("Wednesay"); 
}
else if(num % 7 === 4 ){
    console.log("Thursday"); 
}
else if (num % 7 === 5 ) {
    console.log("Friday"); 
}
else if(num % 7 === 6 ){
    console.log("Saturday"); 
}
else {
    console.log("Enter the correct number"); 
}


