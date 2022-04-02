// Part 1
let nameForm = document.forms[0];
console.log(nameForm);

// Part 2
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
console.log(fname);
console.log(lname);

// Part 3
let fname_name = document.getElementsByName("fname")[0];
let lname_name = document.getElementsByName("lname")[0];
console.log(fname_name);
console.log(lname_name);

// Part 4
let submit = document.getElementById("submit");
submit.addEventListener("click", userData);

fname.required = true;
lname.required = true;

function userData()
{
    let fnameInput = fname.value;
    let lnameInput = lname.value;
    console.log(fnameInput);
    console.log(lnameInput);

    let fnameList = document.createElement("li");
    fnameList.textContent = fnameInput;
    let lnameList = document.createElement("li");
    lnameList.textContent = lnameInput;

    let unorderedList = document.getElementsByClassName("usersAnswer")[0];
    unorderedList.appendChild(fnameList);
    unorderedList.appendChild(lnameList);
    console.log(unorderedList);
}


nameForm.addEventListener("submit", preventDefault)
{
    function preventDefault(){
        e.preventDefault();
    }
}
