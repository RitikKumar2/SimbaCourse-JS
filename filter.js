const arr = [
  {
    name: "amrit",
    age: 25,
  },
  {
    name: "Arsh",
    age: 35,
  },
  {
    name: "Sahil",
    age: 55,
  },
];

const mappo = arr
  .map((val) => val.age + 1)
  .map((val) => val.age + 1)
  .filter((val) => val.age > 40);

console.log(mappo);

// const filterWala = arr.filter((amrit) => {
//   return amrit.age > 45;
// });

// console.log(filterWala);
