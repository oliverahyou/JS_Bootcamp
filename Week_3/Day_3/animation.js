console.log("animation");

let timeout; //ID for timeout function
function set_timeout()
{
    console.log("Setting timeout...");
    timeout = setTimeout(function()
    {
        // Codes to be executed after timeout
        alert("Today is a great day!");
    }, 5000) //timeout in ms
}

function clear_timeout()
{
    console.log("Clearing timeout...")
    clearTimemout(timeout);
}

let interval;
function set_interval()
{
    console.log("Setting interval...");
    interval = setInterval(function() 
    {
        console.log("Please do not forget to send me your project proposal.");
    }, 5000) //in ms
    // To stop after a certain amount of time;
    setTimeout(function()
    {
        clearInterval(interval);
    }, 15000);
}

function clear_interval()
{
    console.log("Clearing interval...");
    clearInterval(interval);
}
// Move the box
function move_it()
{
    console.log("Moving the box");

    let green_box = document.getElementById("inner");
    let black_box = document.getElementById("outer");
    let green_width = green_box.getBoundingClientRect().width;
    let black_width = black_box.getBoundingClientRect().width;

    let pos = 0;
    let move = setInterval(function(){
        if (pos > (black_width - green_width)){
            clearInterval(move);
        }
        else{
            green_box.style.left = pos + "px";
            green_box.style.top = pos + "px";
            pos++;

        }
        
    }, 30)// in ms
}