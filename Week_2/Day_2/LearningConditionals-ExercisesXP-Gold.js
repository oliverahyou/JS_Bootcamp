// EXERCISE 1
// Part 1
let language = prompt("Which language do you speak?");

// Part 2
let lang = language.toLowerCase();
console.log(lang);

// Part 3
if (lang === "french")
{
    alert("Bonjour");
}
else if (lang === "english")
{
    alert("Hello");
}
else if (lang === "hebrew")
{
    alert("Shalom");
}
else 
{
    alert("01110011 01101111 01110010 01110010 01111001");
}

// EXERCISE 2
// Part 1
let grade = prompt("What is your grade?");

// Part 2
if (grade > 90)
{
    console.log("A");
}
else if ( grade > 80 && grade <= 90)
{
    console.log("B");
}
else if (grade >= 70 && grade <= 80)
{
    console.log("C");
}
else if (grade < 70)
{
    console.log("D");
}
else 
{
    console.log("Study harder!")
}

// EXERCISE 3
// Part 1
let verb = prompt("Please enter a verb.");
verb = verb.trim();
verbLength = verb.length;

// Part 2
if (verb.length >= 3) 
{
    if (!verb.endsWith("ing"))
    {
        verb += "ing";
    }
    else 
    {
        verb += "ly";
    }
}
console.log(verb);


