let phil = (name = "Karl") => 'Good Morning ' + name;
console.log(phil());

function multiply(a = 4, b =6 ) {
    return a * b;
   
}
let result = multiply(a = 3, b = 4)
console.log(multiply());


let multiple = function (a = 4, b = 6) {
    return a * b;
}
console.log(multiple());
