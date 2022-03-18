// EXERCISE 1
// Part I

let people = ["Greg", "Mary", "Devon", "James"]

// Part 1
people.shift();
console.log(people);

// Part 2
people.splice(2, 1, "Jason");
console.log(people);

// Part 3
people.push("Oliver");
console.log(people);

// Part 4
let indexMary = people.indexOf("Mary");
console.log(indexMary);

// Part 5
let newPeople = people.slice(1, 3);
console.log(newPeople);

// Part 6
let indexFoo = newPeople.indexOf("Foo");
console.log(indexFoo);
// It returns -1 because "Foo" is not in newPeople. No match was found.

// Part7
let last = newPeople.slice(1);
console.log(last);

// Part II
// part 1
for (let i = 0; i < people.length; i++)
{
    console.log(people[i]);
}

// Part 2
for (let i = 0; i < people.length-1; i++)
{
    console.log(people[i]);
}

// EXERCISE 2
// Part 1
let colors = ["brown", "green", "white", "black", "blue"];

// Part 2
for (let i = 0 ; i < colors.length; i++)
{
    console.log("My number #" + (i+1)  + " choice is " + colors[i]);
}

// Part 3
let colorsSuffix = ["1st", "2nd", "3rd", "4th", "5th"];
for (let i = 0 ; i < colors.length; i++)
{
    console.log("My " + colorsSuffix[i] + " choice is "+ colors[i]);
}

// EXERCISE 3
// Part 1
let number = prompt("Please enter a number.");
console.log(typeof(number));

// Part 2
while (number < 10)
{
    prompt("Please enter another number.")
}