// for (let i = 0; i <= 10; i++) {
//   const val = i;
//   if (val == 5) {
//     console.log("5 aa gya");
//   }
//   console.log(val);
// }

// for (let i = 0; i < 2; i++) {
//   const element = i;
//   console.log(`This is a outer loop ${element}`);
//   for (let j = 0; j < 2; j++) {
//     const val = j;
//     console.log(`This is a inner loop ${val} and also a outer loop ${element}`);
//   }
// }

// for (let i = 5; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// Reverse Method
// let firstName = "Amrit";
// let reversed_firstname = firstName.split("").reverse().join("");
// console.log(reversed_firstname);

// Break Statement

// for (let i = 0; i < 10; i++) {
//   if (i == 6) {
//     break;
//   }
//   const element = i;
//   console.log(element);
// }

//Continue Statement

// for (let i = 0; i < 10; i++) {
//   if (i == 7) {
//     continue;
//   }

//   console.log(i);
// }

// condition ? true : false;/

// while loop

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
//   console.log(x);
// }

// Labeling the outer loop

// label: for (i = 0; i <= 3; i++) {
//   for (j = 0; j <= 3; j++) {
//     console.log(`value of i is :${i} , value of j is : ${j}`);
//     if (i == 2 && j == 2) {
//       break label;
//     }
//   }
// }

// loop
// for loop => for in ,for of, for Each
// while loop
// do while

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let paisa = 0;
// do {
//   console.log(`value of paisa is :${paisa}`);
//   paisa++;
// } while (paisa < 10);

// const obj = {
//   name: "rohit",
//   age: 20,
// };

// for (const key in obj) {
//   console.log(`${key} : ${obj[key]}`);
// }

// let i = 0;
// while (i < 5) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// const obj = {
//   name: "rohit",
//   age: 20,
// };

// Object.keys(obj).forEach((element) => {
//   console.log(element, obj[element]);
// });
