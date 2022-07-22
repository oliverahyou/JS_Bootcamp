// EXERCISE 1

// let person1 = 1996;
// let person2 = 2000;
// let currentyear = 2022;
// let gap = person2 - person1;
// let age_person1 = currentyear - person1;
// let age_person2 = currentyear - person2;
// let halfage_person1 = age_person1 / 2;
// let halfage_gap = age_person2 - halfage_person1;
// let date = currentyear - halfage_gap;
// console.log(date);

// EXERCISE 2
// Part 1

// let input = prompt("Please enter your zip code.");
// let zipArr = input.split("");
// console.log(zipArr);
// console.log(zipArr.length);
// console.log(parseInt(input));

// if (zipArr.length === 5 && zipArr.every((value) => { return (value >= 0)}) && input.includes(" ") === false) {
//     console.log("Success");
// } else {
//     console.log("Error");
// }

// Part 2
// let input = prompt("Please enter your zip code.");
// let regex = /\d{5}/g;
// let validated = regex.test(input);
// if (validated) {
//     console.log("Success");
// } else {
//     console.log("Error");
// }
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// EXERCISE 3
let str = prompt("Please enter a word.");
let resA = str.replace(/a/g, "1");
let resE = resA.replace(/e/g, "2");
let resI = resE.replace(/i/g, "3");
let resO = resI.replace(/o/g, "4");
let resU = resO.replace(/u/g, "5");
console.log(resU);
