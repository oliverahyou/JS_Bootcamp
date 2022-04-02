// Part 1
let allBoldItems = [];

// Part 2
let strongItems = document.querySelectorAll("strong");  
function getBold_items() 
{
    allBoldItems.push(strongItems);
}
getBold_items();
console.log(allBoldItems);

// Part 3
function highlight()
{
    strongItems.style.color = "blue";
}

// Part 4
function return_normal()
{
    strongItems.style.color = "black"
}

// Part 5
strongItems = document.querySelectorAll("strong");
function highlight()
{
    strongItems.style.color = "blue";
}
function return_normal()
{
    strongItems.style.color = "black"
}
strongItems.addEventListener("mouseover", highlight);
strongItems.addEventListener("mouseout", return_normal);
