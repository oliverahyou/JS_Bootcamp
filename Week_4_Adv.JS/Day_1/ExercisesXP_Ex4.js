let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Part 1
colors.forEach((value, i) => {
    let pos = Number(i) + 1;
    console.log(`${pos}# choice is ${value}`);
});

// Part 2
let isViolet = () => {
    console.log(colors.includes("Violet")); 
}
 
let feedback = isViolet() ? "Yeah" : "No...";
console.log(feedback);