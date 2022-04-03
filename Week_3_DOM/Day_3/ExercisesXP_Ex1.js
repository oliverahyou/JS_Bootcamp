function myMove()
{
    console.log("Moving");
    let redBox = document.getElementById("animate");
    let yellowBox = document.getElementById("container");
    let redWidth = redBox.getBoundingClientRect().width;
    let yellowWidth = yellowBox.getBoundingClientRect().width;
    let pos = 0;
    let move = setInterval(function()
    {
        if (pos > (yellowWidth - redWidth))
        {
            clearInterval(move);
        }
        else 
        {
            redBox.style.left = pos + "px";
            pos ++;
        }
    }, 30)
}