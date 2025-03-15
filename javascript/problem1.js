let Burger = 105;
let pizza = 140;
let cake = 49;
let Biryani = 199;

let Burger_price = process.argv[2]
price_Burger = Burger_price * Burger;
let pizza_price = process.argv[3]
price_pizza = pizza_price * pizza;
let cake_price = process.argv[4]
price_cake = cake_price * cake;
let Biryani_price = process.argv[5]
price_Biryani = Biryani_price * Biryani;
console.log(
  "Price of items is : ",
  price_Burger + price_pizza + price_cake + price_Biryani
);
