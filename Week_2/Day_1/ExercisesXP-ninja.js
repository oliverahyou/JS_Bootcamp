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
let str_list = prompt("Please give a list of numbers separated by commas.");

let num_list = str_list.split(',');
console.log(num_list);
let num1 = Number(num_list[0]);
let num2 = Number(num_list[1]);
let num3= Number(num_list[2]);
let sum = num1 + num2 + num3;

console.log(sum);

