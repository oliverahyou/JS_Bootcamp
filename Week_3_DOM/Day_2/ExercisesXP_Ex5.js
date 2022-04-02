let lorem = document.getElementById("lorem");
console.log(lorem);

lorem.addEventListener("click", clickRepond);
function clickRepond(){
    console.log("Clicked.");
}
lorem.addEventListener("click", clickRepond2);
function clickRepond2(){
    lorem.style.backgroundColor= "red";
}
lorem.addEventListener("click", clickRepond3);
function clickRepond3(){
    lorem.style.backgroundColor= "none";
}
lorem.addEventListener("mouseover", overRespond);
function overRespond(){
    lorem.style.fontSize= "2em";
}
lorem.addEventListener("mouseout", outRespond);
function outRespond(){
    lorem.style.fontSize= "1em";
}