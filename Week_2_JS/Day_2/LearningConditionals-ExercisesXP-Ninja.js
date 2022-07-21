// EXERCISE 1

let person1 = 1996;
let person2 = 2000;
let currentyear = 2022;
let gap = person2 - person1;
// gap = 4 years
let age_person1 = currentyear - person1;
// age_person1: 26 y.o
let age_person2 = currentyear - person2;
// age_person2: 22 y.o
let halfage_person1 = age_person1 / 2;
// halfage_person1: 13 y.o
let halfage_gap = age_person2 - halfage_person1;
// halfage_gap: 9 years
let date = currentyear - halfage_gap;
console.log(date);

// EXERCISE 2
let input = prompt("Please enter your zip code.");
let zip = input.toString("");
console.log(zip);
console.log(zipArr.length);

// if (zipArr.length === 5 &&  && input.includes(" ") === false) {
//     console.log("Success");
// } else {
//     console.log("Error");
// }
