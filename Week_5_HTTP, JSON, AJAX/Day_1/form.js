console.log("form");

// Get form
let formNumbers = document.forms.numbers;
console.log(formNumbers);

// Get elements from form
let elem_one = formNumbers.elements.one;
console.log(elem_one);
console.log(elem_one.value);

// Get userFields
let user_field = document.forms.user.userFields; //Shorthand
console.log(user_field);

let login = document.forms.user.login;
console.log(login);

// Backreference
console.log(login.form);

// Form controls
// Get value
console.log(elem_one.value);

// Get checked (Boolean)
let control_form = document.forms.controls;
let ready = control_form.stresslevel;
console.log(ready.checked);

// Get textarea
let textarea = control_form.longtext;
console.log(textarea.value);

//Select and options
console.log(select.options[5].selected);

//Set option from here
select.options[10].selected = true;
select.options[10].value = "MEGA STRESSED!";
select.value = "6";
select.selectedIndex = 4;

// Add new options
let select_options = document.getElementById("select");
let new_option = document.createElement("option");
new_option.value = "MEGA STRESSED!";
new_option.innerText = "MEGA STRESSED!";
select_options.appendChild(new_option);

// Shorthand to create a new option
let another_option = new Option("HYPER STRESSED!", "12", true, true);
select_options.appendChild(another_option);

// Submitting form
let contact_form = document.getElementById("contact");
contact_form.addEventListener("submit", (ev) => {
    ev.preventDefault();
})

function submit_funct(){
    console.log("Submitted");
}
contact_form.onsubmit = submit_funct;