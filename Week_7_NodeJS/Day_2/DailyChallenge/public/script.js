fetch("http://localhost:3000/pic.html")
.then (() => {
    console.log("Fetch successfull!");
}).catch (() => {
    console.log("Error! Fetch failed.");
});

fetch("http://localhost:3000/form.html")
.then(() => {
    console.log("Fetch successfull!");
}).catch (() => {
    console.log("Error! Fetch failed.")
})
let form = document.forms.Potato;
let formEmail = document.getElementById("email").value;
let formMessage = document.getElementById("message").value;

function displayData(){
    console.log(`${formEmail} " sent you a message: " + ${formMessage}`);
}
