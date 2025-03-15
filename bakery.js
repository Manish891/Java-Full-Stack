let cake = 150;
let burger = 200;
let pizza = 250;
let coke = 50;
let biryani = 250;
let icecreame = 130;
let total_bill =
  cake * process.argv[2] +
  burger * process.argv[3] +
  pizza * process.argv[4] +
  coke * process.argv[5] +
  biryani * process.argv[6] +
  icecreame * process.argv[7];
console.log("The Total bill is : ", total_bill);
console.log("Congrats! You got a discount!", process.argv[8] + "%");
let discount = total_bill - (total_bill / 100) * process.argv[8];
console.log("After the discount, the final price is $ :", discount);
