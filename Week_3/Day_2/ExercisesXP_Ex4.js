let submitButton = document.getElementById("submit");

let pi = 3.14159;

let radiusInput = document.getElementById("radius").value;

radius = Number(radiusInput);
radius3 = Math.pow("radius", 3);

submitButton.addEventListener("click", calculateVolume);

function calculateVolume(){
    (4/3) * pi * radius3;
}
let volumeOutput = document.getElementById("volume").value;
