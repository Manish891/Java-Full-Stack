let marks = process.argv[2]
console.log("Enter The Student Marks : ");

if (marks >= 90){
    console.log("Your grade is A+ Marks is : ",marks);   
}
else if(marks >= 80){
    console.log("Your grade is A Marks is : ",marks);   
}
else if(marks >= 70){
    console.log("Your grade is B Marks is : ",marks);   
}
else if(marks >= 60){
    console.log("Your grade is C Marks is : ",marks);   
}
else if(marks >= 50){
    console.log("Your grade is D Marks is : ",marks);   
}
else if(marks >= 40){
    console.log("Your Fail : ",marks);   
}