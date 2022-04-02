// let age = prompt("Please enter your age");
// age = Number(age);

// if (age < 18) {
//     alert("Sorry you are too young to drive this car");
// }
// else if (age == 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// else if (age > 18) {
//     alert("Powering on. Enjoy the ride!");
// }
// else {
//     alert("Unexpecterd input. Input is " + age + ", Please a number only");
// }
// // Exercise convert switch case to if else statement
// let browser = "Chrome";

// switch(browser) {
//     case "Edge":
//         alert("You've got the Edge!");
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         alert("Okay we support these browsers too");
//         break;
//     default:
//         alert("We hope that this page looks ok!");
// }



let browser = prompt("What browser do you use?");
if (browser === "Edge") {
    alert("You\'ve got the Edge!");
}
else if (browser === "Chrome" || 
    browser === "Firefox" ||
    browser === "Safari" || 
    browser === "Opera") {
    alert("Okay we support this browser too");
}
// else if (browser === "Firefox") {
//     alert("Okay we support this browser too");
// }
// else if (browser === "Safari") {
//     alert("Okay we support this browser too");
// }
// else if (browser === "Opera") {
//     alert("Okay we support this browser too");
// }
else {
    alert("We hope that this page looks ok!");
}