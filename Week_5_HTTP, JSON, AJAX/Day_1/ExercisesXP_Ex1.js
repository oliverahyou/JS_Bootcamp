let myForm = document.forms.newForm;

myForm.addEventListener("submit", submitAction);
function submitAction(event) {
    console.log("Form submitted successfully!");
    event.preventDefault();
}