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
];

// Part 2
let section = document.getElementsByTagName("section")[0];
for (let i of planets)
{
    let div = document.createElement("div");
    div.setAttribute("class", "planet");
    div.classList.add(i);
    
    section.appendChild(div);
}
// Part 3
let mercury = document.getElementsByClassName("Mercury")[0];
mercury.classList.add("blue");

let venus = document.getElementsByClassName("Venus")[0];
venus.classList.add("lightgreen");

let earth = document.getElementsByClassName("Earth")[0];
earth.classList.add("lightblue");

let mars = document.getElementsByClassName("Mars")[0];
mars.classList.add("red");

let jupiter = document.getElementsByClassName("Jupiter")[0];
jupiter.classList.add("orange");

let saturn = document.getElementsByClassName("Saturn")[0];
saturn.classList.add("brown");

let uranus = document.getElementsByClassName("Uranus")[0];
uranus.classList.add("purple");

let neptune = document.getElementsByClassName("Neptune")[0];
neptune.classList.add("darkblue");

let planets_2 = {
    Mercury: ["moon, moon"],
    Venus: ["moon"],
    Earth: ["moon", "moon", "moon"],
    Mars: ["moon"],
    Jupiter: ["moon"],
    Saturn: ["moon"],
    Uranus: ["moon"],
    Neptune: ["moon"]
}
let sect = document.getElementsByClassName("section")[0];
for (let i in planets_2)
{
    let planetDiv = document.createElement("div");
    planetDiv.setAttribute("class", "planet");
    planetDiv.classList.add(i);

    let count = 0;
    for (let moon of planets_2[i])
    {
        let moonDiv = document.createElement("div");
        moonDiv.setAttribute("class", "moon");
        moonDiv.style.left = (40 * count).toString() + 'px';
        planetDiv.appendChild(moonDiv);
        count++
    }
    section.appendChild(planetDiv);
}