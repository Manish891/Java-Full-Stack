function FizzBuzz(a){
    let num = process.argv[2]
if (num % 3 == 0 && num % 5 == 0){
    console.log("FIZZBUZZ");   
}
else if(num % 3 == 0){
    console.log("FIZZ");
}
else if (num % 5 == 0){
    console.log("BUZZ");
}
else{
    console.log("enter correct number");
    
}
}
console.log(FizzBuzz(process.argv[2]));
