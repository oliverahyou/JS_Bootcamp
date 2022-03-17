// EXERCISE 1
// Part 1
let x = 5;
let y = 2;

// Part 2
if (x > y) 
{
    console.log("x is the bigger number");
}
else 
{
    console.log("y is the bigger number");
}


// EXERCISE 2
// Part 1
let newDog = "Chihuahua";

// Part 2
let newDogSplit = newDog.split("");
console.log(newDogSplit);
console.log(newDogSplit.length);

// Part 3
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// Part 4
if (newDog === "Chihuahua")
{
    console.log("I love Chihuahuas, it\’s my favorite dog breed")
}
else 
{
    console.log("I dont care, I prefer cats");
}

// EXERCISE 3
// Part 1
let number = prompt("Please input a number.");

// Part 2
if (number % 2 === 0)
{
    alert("Number is an even number");
}
else 
{
    alert("Number is an odd number");
}

// EXERCISE 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length === 0)
{
    console.log("No one is online.");
} 
else if (users.length === 1)
{
    console.log(users[0] + " is online");
}
else if (users.length === 2)
{
    console.log(users[0] + " and " + users[1] + " are online.");
}
else (users.length > 2)
{
    console.log(users[0] + ", " + users[1] + " and " + (users.length - 2) + " more are online." )
}