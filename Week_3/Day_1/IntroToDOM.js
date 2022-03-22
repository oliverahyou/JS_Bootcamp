console.log("Dom");

let elem = document.getElementById("title");
console.log(elem);

// elem.style.color = "red";
// elem.innerText = "Oliver";

let body = document.body;
// body.style.backgroundColor = "blue";

console.log(body.firstChild);
console.log(body.firstElementChild.textContent);
console.log(body.lastElementChild);
console.log(body.childNodes[1]);

// Using id
let div1p1 = document.getElementById("div1-p1");
console.log(div1p1);

// Using tag
let divs = document.getElementsByTagName("div");
for (let div of divs)
{
    console.log(div);
}
// Using class
let reds = document.getElementsByClassName("red")
for(let red of reds)
{
    console.log(red);
}

// Query Selector
let h1 = document.querySelector("h1");
console.log(h1);

let div_query = document.querySelectorAll()
for (let div of div_)