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
// Part 2

// EXERCISE 6
// Part 1 
// function hotelCost()
// {
//     do {
//         num_nights = prompt("Message: Please enter the number of nights: ");
//         num_nights = Number(num_nights)
//     }
//     while 
//     (
//         isNaN(num_nights) || num_nights === 0
//     )
// }

// // Part 2
// function planeRideCost() 
// {
//     let destination = "";
//     do 
//     {
//         destination = prompt("Message: Please enter your destination.").trim()
//     }
//     while 
//     (destination === "" || typeof(destination!=))

//     let ticket = 300;
// }
// // Part 3
// function rentalCarCost()
// {
//     let num_days = null;
//     do 
//     {
//         num_days = prompt("Message: Please enter the number of days");
//         num_days = Number(num_days);
//     }
//     while (isNaN(num_days)|| num_days === 0)
//     let total_amount = num_days * 40;
//     if (num_days > 10)
//     {
//     total_amount = total_amount * 0.95
//     }
//     return total_amount;
// }
// console.log(rentalCarCost());

// // Part 4
// function totalVacationCost()
// {
//     let carCost = rentalCarCost();
//     let ticket = planeRideCost();
//     let hotel = hotelCost();
    
//     console.log("The car costs: $" + carCost + ", the hotel costs: $" + hotel + " and the plane ticket costs: $" + ticket)

//     return (carCost + ticket + hotel);
// }
// console.log(totalVacationCost());