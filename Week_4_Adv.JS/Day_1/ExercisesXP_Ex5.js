let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((value, index) => {
    console.log(`${index+1}${ordinal[index]} is ${color[index]};`)
})