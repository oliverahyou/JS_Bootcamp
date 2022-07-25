let a = {
    FullName: "Le Potato",
    Mass: 90,
    Height: 1.70,
    BMI: function () {
        return this.Mass / (this.Height * this.Height);
    }
};
let b = {
    FullName: "Petunia Melunia",
    Mass: 75,
    Height: 1.68,
    BMI: function () {
        return this.Mass / (this.Height * this.Height);
    }
};
let LeBMI = a.BMI();
let PetuniaBMI = b.BMI();
console.log("Le Potato's BMI is " + LeBMI);
console.log("Petunia Melunia's BMI is " + PetuniaBMI);

const compare = () => {
    if (LeBMI > PetuniaBMI) {
        console.log("Le Potato");
    } else {
        console.log("Petunia Melunia");
    }
};
compare();