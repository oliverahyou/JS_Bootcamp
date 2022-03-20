// EXERCISE 1

let numbers = [123, 8409, 100053, 333333333, 7];
for (let i = 0; i < numbers.length; i++)
{
    let mod = numbers[i] % 3;
    console.log(mod);
    if (mod === 0)
    {
        console.log(true);
    }
    else 
    {
        console.log(false);
    }
}

// EXERCISE 2
let guestList = 
{
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

// Part 1 
let nameInput = prompt("Please enter your name.");
let nameLowerCase = nameInput.toLowerCase();
// for (let i in guestList)
// {
//     if (nameLowerCase === i)
//     {
//     console.log("Hi! I\'m " + i + ", and I\'m from " + guestList[i]);
//     }   
//     else 
//     {
//         console.log("Hi! I\'m a guest.");
//     }
// }
if (nameLowerCase === "randy")
{
    console.log(" Hi! I\'m Randy, and I\'m from Germany.")
}
else if (nameLowerCase === "karla")
{
    console.log(" Hi! I\'m Karla, and I\'m from France.")
}
else if (nameLowerCase === "wendy")
{
    console.log(" Hi! I\'m Wendy, and I\'m from Japan.")
}
else if (nameLowerCase === "norman")
{
    console.log(" Hi! I\'m Norman, and I\'m from England.")
}
else if (nameLowerCase === "sam")
{
    console.log(" Hi! I\'m Sam, and I\'m from Argentina.")
}
else 
{
    console.log("Hi! I'm a guest.")
}

// EXERCISE 3
// Part 1
let age = [20,5,12,43,98,55];
let sum = 0
for (let i = 0; i < age.length; i++)
{
    console.log(sum += age[i]);
} 

// Part 2
function largest(age) {  

    let max = age[0]; 

    for (let i = 1; i < age.length; i++) 
    {
        if (age[i] > max) 
        {
               max = age[i];
        } 
    } 
    return max; 
} 

age = [20,5,12,43,98,55];
console.log(largest(age)); 