let a = process.argv[2]
let b = process.argv[3]
let c = process.argv[4]
let d = process.argv[5]
console.log("Enter The Four Values : ",a,b,c,d);

if (a > b){
    if (a > c){
        if (a > d){
            console.log("a Is big");
        }
        else {
            console.log("d Is Big");
        }
    }
    else {
        if (c > d){
            console.log("c Is Big");
        }
        else {
            console.log("d Is Big")
        }
    }
}
else {
    if (b > c){
        if (b > d){
            console.log("b Is Big")
        }
        else {
            console.log("d Is Big")
        }
    }
    else {
        if(c > d ){
            console.log("c Is Big")
        }
        else {
            console.log("d Is Big");  
        }
    }
}
