var arr = ['5', '8', '9'];
var length = 0;
var longest = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > length){
        longest = arr[i];
        length = arr[i].length;
    }
}
console.log(longest);

