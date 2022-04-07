let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["st","nd","rd", "th", "th", "th", "th"];

color.forEach((value, index) => {
    console.log(`${index+1}${ordinal[index]} is ${value}`);
})