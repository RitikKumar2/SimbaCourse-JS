const shoppingCart = [
  {
    item: "Suit",
    price: 5000,
    colour: "Lavender",
  },
  {
    item: "Suit",
    price: 4000,
    colour: "Lavender",
  },
  {
    item: "Suit",
    price: 7000,
    colour: "Lavender",
  },
  {
    item: "Suit",
    price: 9000,
    colour: "Lavender",
  },
];

const result = arr.reduce((acc, cv) => acc + cv, 0);

console.log(result);
