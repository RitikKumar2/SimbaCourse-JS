// const obj = {
//   name: "Rohit",
//   age: 20,
//   address: "Amritsar",
// };
// console.log(obj["name"]);

// var name = "Ritik";
// const obj = {
//   name: "Rohit",
//   phone: "9876543210",
//   age: 20,
// };
// const obj1 = {
//   name: "Amrit",
//   phone: "9876543210",
//   age: 22,
// };

// const { name } = obj1; ====>Destructure
// console.log(name);
// console.log(`My name is ${obj.name}`);   =====>BackTicks
// console.log(Object.values(obj));

// Implicit return
// Explicit return
// const yoyo = (rohit) => {
//   return rohit;
// };

// console.log(yoyo("Rohit Kumar"));

// const obj = {
//   name: "Rohit Kumar",
//   age: 20,
//   address: "Canada",
//   fullName: function () {
//     console.log(this.address);
//   },
// };

// console.log(obj.fullName());

// function yoyo() {
//   return `My name is ${this.name} and my age is ${this.age}`;
// }
// console.log(yoyo(obj));
// outerloop: for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//     if (i === 2 && j === 2) {
//       break outerloop;
//     }
//   }
// }
// var myObject = {
//     name: "yoyy",
//     age: 30,
//     email: "yoyo@simbaquartz.com",
//   };

//   var keys = Object.keys(myObject);
//   var length = keys.length;

//   for (var i = 0; i < length; i++) {
//     var key = keys[i];
//     var value = myObject[key];
//     console.log(key + " : " + value);
//   }

//////////
// for of in
// const label = [
//   {
//     name: "rohit",
//     age: 20,
//   },
//   {
//     name: "raman",
//     age: 20,
//   },
//   {
//     name: "ritik",
//     age: 20,
//   },
// ];

// for (const aa in label) {
//   console.log(aa);
//   const myNeed = label[aa].name;
// //   console.log(myNeed);
// }

// const aa = {
//   name: "ritik",
//   age: 20,
// };

// for (const bb in aa) {
//   const cc = `key is ${bb} and value is ${aa[bb]}`;
//   console.log(cc);
// }

// const arr = ["rohit", "raman"];
// for (i in arr) {
//   console.log(arr[i]);
// }\

// const map = new Map();
// map.set("name", "ritik");
// map.set("add", "asr");
// map.set("age", "22");
// map.set("aa", "bb");
// map.set("aa", "bb");
// map.set("aa", "bb");

// console.log(map);
// for (const [i, a] of map) {
//   console.log(i, ":)", a);
// }
// const people = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 22 },
//   { name: "Bob", age: 22 },
// ];
// // for (const i of people) {
// //   const aa = i.name;
// //   console.log(aa);
// // }
// const names = people.map((person) => person.name);

// console.log(names);
// Output: ['John', 'Alice', 'Bob']

// Example: Removing duplicate names using map and filter
// const peopleWithDuplicates = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 22 },
//   { name: "John", age: 28 },
//   { name: "Alice", age: 35 },
// ];

// const uniqueNames = [];
// const uniquePeople = peopleWithDuplicates.filter((person) => {
//   if (!uniqueNames.includes(person.name)) {
//     uniqueNames.push(person.name);
//     return true;
//   }
//   //   return false;
// });

// console.log(uniquePeople);

// const arr = ["java", "ruby", "python", "scala"];

// const lol = function (item) {
//   console.log(item);
// };
// arr.forEach(lol);
