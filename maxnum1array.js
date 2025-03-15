function findMax(arr) {
    let max = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      let num = Number(arr[i]);  
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
let arr = ['34', '14', '67', '87', '134', '203'];
console.log(findMax(arr));

