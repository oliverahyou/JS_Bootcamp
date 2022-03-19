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
    number = prompt("Please enter another number.")
}

// EXERCISE 4
// Part 1
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

// Part 2
console.log(building.numberOfFloors);

// Part 3
let apt1 = building.numberOfAptByFloor.firstFloor;
let apt3 = building.numberOfAptByFloor.thirdFloor;
let apt_floor1and3 = apt1 + apt3;
console.log(apt_floor1and3);

// Part 4
let numOfRooms = building.numberOfRoomsAndRent.dan[0];
console.log(numOfRooms);

// Part 5
let rentDan = building.numberOfRoomsAndRent.dan[1];
let rentSarah = building.numberOfRoomsAndRent.sarah[1];
let rentDavid = building.numberOfRoomsAndRent.david[1];
let sumOfRents = rentSarah + rentDavid;

if (sumOfRents > rentDan)
{
    rentDan += 200;
}
console.log(rentDan);

// EXERCISE 5
// Part 1
let family = 
{
    mother: "Kristina",
    father: "Benjamin",
    sibling1: "Bob",
    sibling2: "Oliver",
    uncle: "Henry",
    cousin1: "Damien",
    cousin2: "Dheeksha"
}
// Part 2 & 3
for (let i in family)
{
    console.log(i);
    console.log(family[i]);
}

// EXERCISE 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
let sentence = " ";
for (let i in details)
{
    console.log(sentence += i + " " + details[i] + " ");
}

// EXERCISE 7
// Part 1
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let namesAlp = names.sort();
let secretName = " ";
for (let i = 0; i < namesAlp.length; i++) {
    console.log(secretName += namesAlp[i][0]);
  }