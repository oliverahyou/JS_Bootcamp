// Part 1
let unorderedList = document.querySelectorAll("ul");
unorderedList[0].lastElementChild.textContent = "Richard";

// Part 2
unorderedList[0].firstElementChild.textContent = "Oliver";
unorderedList[1].firstElementChild.textContent = "Oliver";

// Part 3
let newList = document.createElement("li");
let text = document.createTextNode("Hey students");
newList.appendChild(text);
unorderedList[0].appendChild(newList);

newList = document.createElement("li");
text = document.createTextNode("Hey students");
newList.appendChild(text);
unorderedList[1].appendChild(newList);

// Part 4
let locateSarah = unorderedList[1].children[1];
unorderedList[1].removeChild(locateSarah);

// Part 5: Bonus
unorderedList[0].classList.add("student_list");
unorderedList[1].classList.add("student_list");

unorderedList[0].classList.add("university", "attendance");