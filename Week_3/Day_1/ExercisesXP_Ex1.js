// EXERCISE 1
// Part 1
let division = document.querySelector("div");

division.setAttribute("id", "socialNetworkNavigation");

// Part 2
let listElement = document.createElement("li");

let text = document.createTextNode("Logout");

listElement.appendChild(text);

let unorderedList = document.querySelector("ul");

unorderedList.appendChild(listElement);

// Part 3: Bonus
console.log(unorderedList.firstElementChild.textContent);

console.log(unorderedList.lastElementChild.textContent);