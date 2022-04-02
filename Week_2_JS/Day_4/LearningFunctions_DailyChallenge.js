let words = prompt("Please enter several words separated by commas.")
let arr = words.split(", ");
console.log(arr);

let long1 = 0;
function longestWord(arr)
{
    for(let i = 0; i < arr.length; i++)
    {    
        if (arr[i].length > long1)
        {
            long1 = arr[i].length
            console.log("long1 = " + long1);
        }
    }
}
longestWord(arr);
let starWidth = long1 + 2;
console.log("starWidth = " + starWidth);
let astWidth = "********";

let starHeight = arr.length + 2;
console.log("starHeight = " + starHeight);
let astHeight = "*"
for (let i = 0; i < 7; i++)
{
    console.log(astHeight[i]);
}