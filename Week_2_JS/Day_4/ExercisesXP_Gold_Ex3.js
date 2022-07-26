let input = prompt("Please enter a sentence.");

const swapCase = () => {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let res = [];
    
    for (let i=0; i < input.length; i++){
        if (upper.indexOf(input[i]) !== -1){
            res.push(input[i].toLowerCase());
        } else if (lower.indexOf(input[i]) !== -1) {
            res.push(input[i].toUpperCase());
        } else {
            res.push(input[i]);
        }
    }
    console.log(res.join(""));
}
swapCase(input);
