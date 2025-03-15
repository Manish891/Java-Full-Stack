let a =  process.argv[2]
let b =  process.argv[3]
let c =  process.argv[4]
if (a == "true" && b == "true" && c == "false"){
    console.log(true);
}
else if(a == "false" && b == "true" && c == "true") {
    console.log(true)
}
else if(a == "true" && b == "false" && c == "true"){
    console.log(true)
}
else if(a == "true" && b == "true" && c == "true"){
    console.log(true)
}
else {
    console.log(false);
}
