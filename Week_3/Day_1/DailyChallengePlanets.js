// Part 1
let planets = 
[
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
]

// Part 2
let section = document.getElementsByTagName("section")[0];
for (let item of planets)
{
    let div = document.createElement("div");
    div.setAttribute("class", "planet");
    div.classList.add(item);
    
    section.appendChild(div);
}
