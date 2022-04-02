console.log("Hello JS FT Students");
// Declare a variable
let a = 5;
let b = 3;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);

let sum = a + b;
console.log(sum);
// updated the value of the variable
a=2;
console.log(a);
console.log(b);
console.log(sum);

sum = a + b;
console.log(sum);

b=4
console.log(sum);

sum = a + b;
console.log(sum);

// variable
// let A is not equal to let a

// Primitive data types
// Numbers - digits 0-9
// Strings - " " or ' '
// Boolean - True or False (1 or 0)
// Undefined - declared but no value assigned
// Null - special value that does not belong

// Undefined
let A;
console.log(A);

// Null
let B = null;
console.log(B);

// Strings
let str = "Today is a beautiful day!"
console.log(str);

let str1 = "Hello";
let str2 = " World";

// Concatenation
console.log(str1 + " " + str2)
let str3 = "1";
let str4 = "3";

console.log(str3 + str4);

// Convert to number and add

console.log(str3); //string
str3 = Number(str3);
console.log(str3); //number

console.log(str4);//String
str4 = Number(str4);
console.log(str4); //Number

console.log(str3 + str4);

// Methods - In-built functions to manipulate the type
// "Hello"
console.log(str1.length);
console.log(str1.indexOf('o'));
console.log(str1.indexOf('l'));
console.log(str1.substring(0, 2));
console.log(str1.substring(1));

console.log(str1.substring(
    str1.indexOf('e'), 
    str1.indexOf('o') + 1
    )); 

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.replace('o', 'a'));
console.log(str1.concat(str2));
console.log(str1.charAt(4));

// Remove blank spaces before and after string
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());


//Number methods
//toString()
let num1 = 4;
let num2 = 3;

console.log(num1);
console.log(num1.toString());

//toFixed()
let pi = 3.14159
console.log(pi.toFixed(3));

//isNaN()
console.log(isNaN(pi));
console.log(isNaN("number"));

//Boolean
let status = true;
console.log(status);
console.log(Number(status));

let op = Boolean(8>9);
console.log(op);

// Comparisons
/* 
= means assign
== means compare value only
=== means compare value and type
*/

let var1 = 5;
let var2 = "5";

console.log(Boolean(var1==var2));
console.log(Boolean(var1===var2));
console.log(Boolean(var1!=var2));
console.log(Boolean(var1!==var2));

/*
|| - OR
&& - AND
! - NOT
*/

console.log(Boolean((var1 > 10) || (var1===var2)));
console.log(Boolean(var1 > 0) && (var1==var2))

//User Interface Functions
//Alert
alert("Please wake up!");
let input = prompt("Please enter your name");
console.log(input);

//Confirm - ask a question  (true or false)
let isOK = confirm("Are you confused with JS?");
console.log(isOK);