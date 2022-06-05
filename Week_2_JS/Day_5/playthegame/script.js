function playTheGame(){
    confirm("Would you like to play the game?");
    if (confirm("Would you like to play the game?") === false){
        alert("No problem, Goodbye.");
    } else {
        let userNumber = prompt("Please enter a number between 0 and 10.");
        console.log(`userNumber: ${userNumber}`);
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye");
        } else if (userNumber >= 10 || userNumber <= 0) {
            alert("Sorry it's not a good number, Goodbye");
        } else {
            const computerNumber = Math.floor(Math.random() * 10);
            console.log(`computerNumber: ${computerNumber}`);
            compareNumbers(userNumber, computerNumber);
        };
    };
};
function compareNumbers(userNumber, computerNumber) {
    for (let i = 0; i < 2; i++) {
        if (userNumber > computerNumber) {
            alert("Your number is bigger than the computer's, guess again");
            userNumber = prompt("Please enter a number between 0 and 10.");
            console.log(`userNumber: ${userNumber}`);  
            if (i === 1){
                alert("Out of chances");
            };
        };  
    };
    for (let i = 0; i < 2; i++) {
        if (userNumber < computerNumber) {
            alert("Your number is smaller than the computer's, guess again");
            userNumber = prompt("Please enter a number between 0 and 10.");
            console.log(`userNumber: ${userNumber}`);
            if (i === 1){
                alert("Out of chances");
            };
        };     
    };
    if (userNumber == computerNumber) {
        alert("WINNER");
        console.log("Congratulations! You won!")
    };
};

