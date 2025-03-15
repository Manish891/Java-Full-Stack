let arr = [10, 20, 30, 40, 50];
let elementatindex2;
let lastelemnt;
for (let i = 0; i < arr.length;i++) {
    if( i == 2){
    elementatindex2 = arr[i];
    }
    if (i == arr.length - 1){
    lastelemnt = arr[i];
    }
    }
console.log("element at index 2:",elementatindex2);
console.log("Last element: ",lastelemnt);
