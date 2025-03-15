let arr1 = [1, 2, 3, 4, 5, 6];
let result = arr1.reduceRight((sum, i) => (sum + i), 0);
console.log(result);
console.log(arr1.fill(0, 1, 4));
console.log(arr1.fill(5, 2));
console.log(arr1.fill(3));
console.log();


