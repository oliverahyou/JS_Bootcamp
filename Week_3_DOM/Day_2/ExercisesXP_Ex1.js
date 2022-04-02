// Part 1
let heading1 = document.getElementsByTagName("h1")[0];
console.log(heading1);

// Part 2
let article = document.getElementsByTagName("article")[0];
let lastP = article.lastElementChild;
article.removeChild(lastP);

// Part 3
let heading2 = document.getElementsByTagName("h2")[0];
heading2.addEventListener("click", respondClick);

function respondClick() 
{
    heading2.style.background = "red";
}

// Part 4
let heading3 = document.getElementsByTagName("h3")[0];
heading3.addEventListener("click", hide);

function hide()
{
    heading3.style.display = "none";
}

// Part 5
let paragraphs = document.getElementsByTagName("p");

let goBoldButton = document.getElementById("btn");
goBoldButton.addEventListener("click", goBold);

function goBold()
{
    for (let i = 0; i < paragraphs.length; i++)

    {
        paragraphs[i].style.fontWeight = "bold";
    }
}

// Part 6
let randomNum = Math.floor(Math.random() * 101);
heading1.addEventListener("mouseover", respondMouseOver);

function respondMouseOver()
{
    heading1.style.fontSize = randomNum + "px";
}

// Part 7
let secondPara = document.getElementsByTagName("p")[1];
secondPara.addEventListener("mouseover", fade);

function fade()
{
    secondPara.style.opacity = "0.5";
    secondPara.style.transition = "all 2s";
}