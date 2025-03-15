let a = process.argv[2]
let b = process.argv[3]
let c = process.argv[4]
console.log("Enter The a,b,c Values : ");
if (a > b && a > c){
    console.log("a is big",a);
}
else if(b > c && b > a) {
    console.log("b is big",b);
}
else if (c > a && c > b ) {
    console.log("big is c ",c);
}


