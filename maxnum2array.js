function secondMax(arr) {
    if (arr.length < 2){
        throw new Error("Array must contain at least two elements");
    }
    arr = arr.map(Number);
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let num of arr){
        if (num > max){
            secondMax = max;
            max = num;
        }
        else if (num > secondMax && num < max){
            secondMax = num;
        }
    }
    if (secondMax === -Infinity){
        console.error("No second maximum value found");
        return null;
    }
    return secondMax;
}
console.log(secondMax(['4', '3', '9', '10']));


