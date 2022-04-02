console.log("Advanced");

let x = 5;
function something(num1)
{
    let y = 6;
    console.log(x);
    console.log(y);
    console.log(num1);
}
// something(8);
// console.log(y);

function doSomethingElse()
{
    console.log(x);
    let x = 1;
    console.log("x: ", x);
}

function doSomethingElse()
{
    console.log(x);
    var x = 1;
    console.log("x: ", x);
}

// Re-declare
// function doSomething(){
//     var x = 1
//     console.log("x: ", //x: 2
//     var x = 2;
//     console.log("x: ",x); //x: 2

let y = 1;
{
    // console.log("y: ", y);
    let y = 2;
    console.log("y: " + y);
}
console.log("y : ", y); //y: 1

let i;
function numbers() {
    for (let i = 0; i < 5; i += 1) {
      console.log(i);
    }
      console.log(i);
  }
  numbers();

//  Conditional (Ternary) operator
function checkAge2(age)
{
    return(age < 18 ? "Sorrry, you're too young." : "Yay! You're old enough!")
}
console.log(checkAge2(21));

// Exercise 1
function checkYear(year)
{
    return( year > 2000 ? "You are in the 21st century." : "You live in the middle age.")
}
console.log(checkYear(2022));
console.log(checkYear(1922));

// Exercise 2
const calculator = (a, b, operator) => {
    return operator === "+" ? a + b
    : operator === "-" ? a - b
    : operator === "*" ? a * b
    : "Unexpected error."
}
console.log(calculator(2,3, "+"));
console.log(calculator(2,3, "-"));
console.log(calculator(2,3, "*"));

let val = 5;
console.log(`The value is ${val}.`);

console.log(`string text line 1\r\n string`);

// Array methods 
// forEach
let myArray = [2, 3, 4, 5, 6];
myArray.forEach((value, index) => {
    console.log("value: ", value, "at index", index);
});

// Double value of original array
myArray.forEach((number, i, arr) => {
    // arr[i]=arr[i] * 2
    arr[i] *= 2;
});

console.log(myArray);

// some()
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

const odd = (element) => element % 2 === 1;

// At least one element
console.log(myArr.some(even));
console.log(myArr.some(odd)); 

// All elements
console.log(myArr.every(even));
console.log(myArr.every(odd)); 


// Additional methodds
// includes
console.log(myArr.includes(4));
console.log(myArr.includes(1));

// fLat()
let arr = [
    1,      //Ground
    2,
    3,
    4,
        [5,     //1
        6,
        7,
        [
            8,      //2
            9,
            10
        ]
    ]
]
console.log(arr.flat()); //=> flat(1)
console.log(arr.flat(2));