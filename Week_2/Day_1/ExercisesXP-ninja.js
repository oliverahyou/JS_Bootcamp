// Exercise 1

5 >= 1
// Prediction: True
// Actual: True
console.log(Boolean(5 >= 1));
    
0 === 1
// Prediction: False
// Actual: False
console.log(Boolean(0 === 1));

4 <= 1
// Prediction: False
// Actual:False
console.log(Boolean(4 <= 1));

1 != 1
// Prediction: False
// Actual: False
console.log(Boolean(1 != 1));

"A" > "B"
// Prediction: False
// Actual: False
console.log(Boolean("A" > "B"));

"B" < "C"
// Prediction: True
// Actual: True
console.log(Boolean("B" < "C"));

"a" > "A"
// Prediction: True
// Actual: True
console.log(Boolean("a" > "A"));

"b" < "A"
// Prediction: False
// Actual: False
console.log(Boolean("b" < "A"));

true === false
// Prediction: False
// Actual: False
console.log(Boolean(true === false));

true != true
// Prediction: False
// Actual: False
console.log(Boolean(true != true));

// Exercise 2
// Part 1
let str_list = prompt("Please give a list of numbers separated by commas.");

// Part 2
let num_list = str_list.split(',');
console.log(num_list);
let num1 = Number(num_list[0]);
let num2 = Number(num_list[1]);
let num3= Number(num_list[2]);
let sum = num1 + num2 + num3;

console.log(sum);

// EXERCISE 3
// Part 1
let sentence = prompt ("Write a sentence with the word 'Nemo'.");

// Part 2 
console.log(sentence.indexOf("Nemo"));

// Part 3
console.log("I found Nemo at " + sentence.indexOf("Nemo"));

// Part 4
if (sentence.indexOf("Nemo") > -1)
{
    console.log("I found Nemo at " + sentence.indexOf("Nemo"));
}
else 
{
    console.log("I can\'t find Nemo");
}

// EXERCISE 4
let num = prompt("Please write a number.");

if (num < 2)
{
    alert("boom");
}
else if (num > 2)
{
    alert("b" + ("o" * num) + "m");
}
else if (num % 2 === 0)
{
    alert("boom!")
}
else if (num % 5 === 0)
{
    alert("BOOM");
}
else if (num % 2 && num % 5)
{
    alert("BOOM!");
}
else 
{
    alert("This is strange. Try with another number please.");
}