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
let str = prompt("Please write a verb.");

// Part 2
let strSplit = str.split("");
if (strSplit.length >= 3 && !strSplit.includes("i", "n", "g"))
{
    let verbing = strSplit.push("ing");
    console.log(verbing);
}
else if (strSplit.length >= 3 && strSplit.includes("i", "n", "g"))
{
    let verbingly = strSplit.push("l", "y");
    console.log(verbingly); 
}
else if (str.length < 3)
{
    console.log(str);
}
else
{
    alert("Ooops. Something went wrong. Try again with another verb.")
}