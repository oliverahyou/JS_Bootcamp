// EXERCISE 1
// Part 1
function infoAboutMe()
{
    console.log("My name is Oliver. I am 25 years old. My hobby is reading.")
}
infoAboutMe();

// Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor)
{
    console.log("Your name is " + personName + ", you are " + personAge + ". " + "Your favorite color is " + personFavoriteColor + ".");
}   
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// EXERCISE 2

// Part 1
function calculateTip()
{
    let bill = prompt("Please enter your bill($): ");
    bill = Number(bill);

    if (bill < 50)
    {
        tip = bill * 0.5;
    }
    else if (bill >= 50 && bill <= 200)
    {
        tip = bill * 0.15;
    }       
    else if (bill > 200)
    {
        tip = bill * 0.1;
    }
    console.log("Tip($): " + tip);
    let finalBill = bill + tip;
    console.log("Final bill($): " + finalBill);
}
calculateTip();
// EXERCISE 3
let sum = 0;
function isDivisible(divisor)
{
    for(let i=0; i<501; i++)
    {
        if (i % divisor === 0)
        {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum = " + sum);    
}
isDivisible(23);
isDivisible(3);
isDivisible(45);  

// EXERCISE 4
let stock = 
{ 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = 
{    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
sum = 0;
function myBill(stock, prices)
{
    if (stock["banana"] > 0)
    {
        sum += prices["banana"];
        stock["banana"]--
    }
    else 
    {
        console.log("Sorry, we are out of bananas.")
    }
    if (stock["orange"] > 0)
    {
        sum += prices["orange"];
        stock["orange"]--
    }
    else 
    {
        console.log("Sorry, we are out of oranges.")
    }
    if (stock["apple"] > 0)
    {
        sum += prices["apple"];
        stock["apple"]--
    }
    else 
    {
        console.log("Sorry, we are out of apples.")
    }
    console.log("Total price ($): " + sum);
}
myBill(stock, prices);

// EXERCISE 5
function changeEnough(itemPrice, [amountQuarters, amountDimes, amountNickels, amountPennies])
{
    // Amount of change = [amountQuarters, amountDimes, amountNickels, amountPennies]
    quarters = 0.25 * amountQuarters;
    dimes = 0.10 * amountDimes;
    nickels = 0.05 * amountNickels;
    pennies = 0.01 * amountPennies;

    sumOfChange = quarters + dimes + nickels + pennies;

    if (sumOfChange >= itemPrice)
    {
        console.log(true);
    }
    else if (sumOfChange < itemPrice)
    {
        console.log(false);
    }
}
changeEnough(4.25, [25, 20, 5, 0]);

// EXERCISE 6
// Part 1
function hotelCost()
{   
    let num_nights = null;
    do 
    {
        num_nights = prompt("For how many nights would you like to stay in the hotel?");
        num_nights = Number(num_nights);
    }
    while (isNaN(num_nights) || num_nights === 0)
    
    let cost = num_nights * 140;
    console.log(cost);    
}
hotelCost();

// Part 2
function planeRideCost()
{
    let destination = "";
    do 
    {
        destination = prompt("Please enter your destination.")
    }
    while (
        destination === "" || typeof(destination) != "string"
    )
    let ticket = 300;
    if (destination === "London")
    {
        ticket = 183;
        console.log(ticket);
    }
    else if (destination === "Paris")
    {
        ticket = 220
        console.log(ticket);
    }
    return ticket;
    
}
planeRideCost();

// PART 3
function rentalCarCost()
{
    do{
        num_days = "";
        num_days = prompt("For how many days would you like to rent the car?");
    }    
    while (num_days === "" || isNaN(num_days));
    if (num_days <=10)
    {
        totalAmount = num_days * 40;
        console.log(totalAmount);
    }
    else if (num_days > 10)
    {
        totalAmount = totalAmount * 0.95 
        console.log(totalAmount);
    }
    return totalAmount;
}
rentalCarCost();

// Part 4
function totalVacationCost()
{
    let carCost = rentalCarCost();
    let ticket = planeRideCost();
    let hotel = hotelCost();

    console.log("The car costs $" + carCost + ", the hotel costs $" + hotel + ", the plane ticket costs $" + ticket);
}
totalVacationCost();