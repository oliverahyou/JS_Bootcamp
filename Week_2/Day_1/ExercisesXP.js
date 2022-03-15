// Exercise 6.


5 + "34"
//Prediction: 534
//Actual: 534
let a = 5;
let b = "34";
sum = a + b;
console.log(sum);

5 - "4"
//Prediction:
//Actual: 1
a = 5;
b = "4";
diff = a - b;
console.log(diff);

10 % 5
//Prediction: 0
//Actual:
a = 10;
b = 5;
console.log(a % b);

5  % 10
//Prediction: 5
//Actual:
a = 5;
b = 10;

"Java" + "Script"
//Prediction: JavaScript
//Actual:
a = "Java";
b = "Script";
sum = a + b;
console.log(sum);

" " + " "
//Prediction:"  "
//Actual:"  "
a = " ";
b = " ";
sum = a + b;
console.log(sum);

" " + 0
//Prediction:" "0
//Actual:" "0
a = " ";
b = 0;
sum = a + b;
console.log(sum);

true + true
//Prediction: ;
//Actual: 2
console.log(1 + 1);

true + false
//Prediction: 1
//Actual: 1
console.log(true + false);

false + true
//Prediction: 1
//Actual: 1
console.log(false + true);

false - true
//Prediction: -1
//Actual: -1
console.log(false - true);

!true
//Prediction: false
//Actual: false
console.log(!true);

3 - 4
//Prediction: -1
//Actual:-1
a = 3;
b = 4;
diff = a - b;
console.log(diff);

"Bob" - "bill"
//Prediction:
//Actual: NaN
a = "Bob";
b = "bill";
diff = a - b;
console.log(diff);



// Exercise 1
let favfood = "cheese";
let favmeal = "dinner";
console.log("I eat" + " " + favfood + " " +"at every" + " " + favmeal);


//Exercise 3
let tmpc = 37;
let tmpf = tmpc/5*9+32
console.log(tmpc + " " +"is" + " " + tmpf);

// Exercise 4
let c;
a = 34;
b = 21;

console.log(a+b) //first expression
// Prediction: 55 since both a and b are numbers
// Actual:
console.log(a+b)

a = 2;

console.log(a+b) //second expression
// Prediction: 23 since both a and b are numbers and a=2
// Actual:

// value of c = undefined
// Outcome = 75


// Exercise 5
typeof(15)
// Prediction: Number
// Actual:
console.log(typeof(15));

typeof(5.5)
// Prediction: Number
// Actual:

typeof(NaN)
// Prediction: Not a Number, !Number
// Actual:

typeof("hello")
// Prediction: String
// Actual:

typeof(true)
// Prediction:Boolean
// Actual:
console.log(typeof(true));

typeof(1 != 2)
// Prediction: True
// Actual:

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: hamburgerss
// Actual:

"1" + "3"
// Prediction: 13
// Actual:

"1" - "3"
// Prediction: NaN
// Actual:

"johnny" + 5
// Prediction: johnny5
// Actual:

"johnny" - 5
// Prediction:NaN
// Actual:

99 * "hello"
// Prediction:99hello
// Actual:NaN
console.log(99*"hello");

1 != 1
// Prediction: False
// Actual: False
console.log(1!=1);

1 == "1"
// Prediction: True
// Actual:True 
console.log(1=="1");

1 === "1"
// Prediction: False
// Actual: False
console.log(1==="1");

console.log(Number("three"));

//Exercise 2

let watchedSeries = ["black mirror", "money heist", "the big bang theory"]
let watchedSeriesLength = watchedSeries.length;
console.log(watchedSeriesLength);

let myWatchedSeries = watchedSeries[0] + ", " + watchedSeries[1] + ", " + watchedSeries[2];
console.log(myWatchedSeries);

console.log("I watched " + watchedSeriesLength + " series: " + myWatchedSeries);

// Part 2
watchedSeries[2] = "Friends";
console.log(watchedSeries);

watchedSeries.push("Squid Game");
console.log(watchedSeries);

watchedSeries.splice(0, 0, "Sponge Bob Squarepants");
console.log(watchedSeries);

delete watchedSeries[1];
console.log(watchedSeries);

// console.log("n");
console.log(watchedSeries[2].charAt(2));

console.log(watchedSeries);