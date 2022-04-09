let kilograms = prompt("Please enter the number of kilograms.");
kilograms = Number(kilograms);
console.log(kilograms);

//Part 1
function kilosToGrams(kilograms){
    return (kilograms * 1000);
}
console.log(kilosToGrams(kilograms));

//Part 2
const numberOfGrams = function(kilograms) {
    return (kilograms * 1000)
}
console.log(numberOfGrams(kilograms));

// Part 3: Function declaration declares a function with the function keyword whereas function expression introduces anonymous functions.

// Part 4
const NoOfGrams = (kilograms) => (kilograms * 1000);
console.log(NoOfGrams(kilograms));