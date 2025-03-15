let a = process.argv[2]
let b = process.argv[3]
let c = process.argv[4]
let d = process.argv[5]
let e = process.argv[6]
console.log("Your Enter Values is : ",a,b,c,d,e);
if (a > b){
    if (a > c){
        if (a > d){
            if (a > e){
                console.log("a Is Big : ",a)
            }
            else {
                console.log("e Is Big : ",e);
            }
        }
        else {
            if (d > e){
                console.log("d Is Big : ",d);
            }
            else {
                console.log("e Is Big : ",e);
            }
        }
    }
    else {
        if (c > d){
            if(c > e){
                console.log("c Is Big : ",c);
            }
            else {
                console.log("e Is Big : ",e);
            }
        }
        else {
            if (d > e){
                console.log("d Is Big : ", d);
            }
            else {
                console.log("e Is Big : ", e);
            }
        }
    }
}
else {
    if(b > c){
        if(b > d){
            if(b > e){
                console.log("b Is Big : ",b);
            }
            else {
                console.log("e Is Big : ",e);
            }
        }
        else {
            if (d > e){
                console.log("d Is Big : ",d);
            }
            else {
                console.log("e Is Big : ",e);
            }
        }
    }
    else {
        if (c > d){
           if (c > e){
            console.log("c Is Big : ",c);
           } 
           else {
            console.log("e Is Big : ",e);
           }
        }
        else {
            if (d > e){
                console.log("d Is Big : ",d);
            }
            else{
                console.log("e Is Big : ",e);
            }
        }
    }
}

