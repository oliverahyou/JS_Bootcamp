console.log("Arrays");

let students = [
    "Oliver",
    "Dheeksha",
    "Henry", 
    "Wayne", 
    "Julie",
    "Bashir"
]
console.log(students);

//Get an element from array
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);

console.log(students.length);

//Update an element in array
// Change Oliver to Ah-Fat
students[0] = "Ah-Fat";
console.log(students);

// Add a new element inside array
students[6] = "Damien";

// Add a new element inside array(at the last position)
students[students.length] = "Damien"
console.log(students);

students[10] = "Samuel Eto'o";
console.log(students);
console.log(students[9]);

// Array methods
// Adds element at last poisition
students.push("Yeshna");
console.log(students);

// Remove element at last poisition
students.pop();
console.log(students);

// Splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


// Slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// Join element of an array
let arr = ["a", "b", "c", "d"];

console.log(arr);
console.log(arr.toString);
console.log(arr.join(""));

let str = "Wayne";
console.log(str);

// Convert string to array
str_arr = str.split("");
console.log(str_arr);
console.log(str_arr.join(""));

// To delete an element from an array
console.log(arr);
delete arr[0];

console.log(arr);


// Shift - Removes first element from array
let arr_example = [1, 2, 3, 4, 5];

let first_elem = arr_example.shift();
console.log(first_elem);
console.log(arr_example);

//Unshift add element at the beginning
console.log(arr_example.unshift(0));
console.log(arr_example);