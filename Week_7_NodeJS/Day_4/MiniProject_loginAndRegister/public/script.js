const isEmptyL = () => {
    let loginUser = document.getElementById("loginUser").value;
    let loginPass = document.getElementById("loginPass").value;
    let loginBtn = document.getElementById("login");
    if (loginUser != "" && loginPass != "") {
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.disabled = true;
    };
};
const isEmptyR = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let registerUser = document.getElementById("registerUser").value;
    let registerPass = document.getElementById("registerPass").value;
    let registerBtn = document.getElementById("register");

    if (fname != "" && lname != "" && email != "" && registerUser != "" && registerPass != "") {
        registerBtn.removeAttribute("disabled");
    } else {
        registerBtn.disabled = true;
    };
};

fetch("http://localhost:3000")
.then(res => {
    res.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(`Error: ${err}`);
})
