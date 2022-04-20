function myFunction(event){
    event.preventDefault();
    firstname = document.forms.challenge.firstname.value;
    lastname = document.forms.challenge.lastname.value;
    console.log(JSON.stringify({firstname, lastname}));
    return JSON.stringify({firstname, lastname});
}