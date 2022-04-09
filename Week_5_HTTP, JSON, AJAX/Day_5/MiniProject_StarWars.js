let button = document.getElementById("button")

button.addEventListener("click", function(){
    find_star_wars_character();
}) 


function find_star_wars_character(){
    console.log("Button clicked")
}

let num = Math.floor(Math.random()*83)+1 ;
let xhr = new XMLHttpRequest();

let url = "https://swapi.dev/api/people/1";

xhr.open("GET", url, true);

xhr.responseType = "json";

xhr.send();
xhr.onload = function(){
    if (xhr.status === 200){
        console.log(xhr.response)
    }
    else {
        console.log("Error ${xhr.status} - ${xhr.response")
    }
    xhr.onerror = function(){
        alert("An unexpected error occured.")
    }
}

function get_homeworld(url){

}

function display_character(character_obj){
    console.log("Display Character")
    let name = document.createElement("h3");
    let height = document.createElement("p");
    let gender = document.createElement("p");
    let year = document.createElement("p");
    let home = document.createElement("p");

    name.innerText = character_obj.name;
    height.innerText = "Height: " + character_obj.height;
    gender.innerText = "Gender: " + character_obj.gender;
    year.innerText = "Birth Year: " + character_obj.birth_year;
    home.innerText = "Home World: " + character_obj.homeworld;


    container.appendChild(name);
    container.appendChild(height);
    container.appendChild(gender);
    container.appendChild(year);
    container.appendChild(home);

}