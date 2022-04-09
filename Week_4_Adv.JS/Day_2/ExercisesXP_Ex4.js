// Part 2
let username = prompt("What is your username?");
let navbar = document.getElementsByClassName("navbar-nav")[0];

(function (username){
    console.log(`Welcome ${username}!`);
    let newDiv = document.createElement("div");
    newDiv.innerText = `${username}`;
    let newDiv2 = document.createElement("img");
    newDiv2.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faussiegossip.com.au%2Fwp-content%2Fuploads%2F2017%2F08%2Fnoelpotato.jpg&f=1&nofb=1")
    newDiv2.style.width = "50px";
    navbar.appendChild(newDiv);
    navbar.appendChild(newDiv2);
})(username)
