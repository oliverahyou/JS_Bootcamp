// Exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Part 1
fruits.shift();
console.log(fruits);

// Part 2
fruits.sort();
console.log(fruits);

// Part 3
fruits.push("Kiwi");
console.log(fruits);

// Part 4
fruits.splice(0, 1);
console.log(fruits);

// Part 5
fruits.reverse();
console.log(fruits);

// Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
 let oranges = moreFruits[1][1];
 console.log(oranges);