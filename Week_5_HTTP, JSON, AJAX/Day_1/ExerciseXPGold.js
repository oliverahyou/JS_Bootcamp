let submitButton = document.getElementById("sbmt");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");


submitButton.addEventListener("click", onClick);
function onClick(event){
    event.preventDefault();
    console.log(`Firstname: ${firstName.value}, Lastname: ${lastName.value}`);
}