//Swap With out using third variable
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
a = a + b;
b = a - b;
a = a - b;
console.log("a Value After Swap:", a);
console.log("b Value After Swap:", b);

// Swap of two numbers with using third variable 

let c = a;
a = b;
b = c;
console.log("Swap Of Number Using Third Variable : ", a);
console.log("Swap Of Number Using Third Variable : ", b);


//Swap With out using third variable
let e = 5;
let d = 10;
console.log("Before swapping: e =", e, ", d =", d);

e = e + d;
d = e - d;
e = e - d;

console.log("After swapping: e =", e, ", d =", d);






