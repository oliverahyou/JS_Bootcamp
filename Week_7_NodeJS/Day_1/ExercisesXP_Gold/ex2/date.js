const a = function minutes(birthYear){
    let d = new Date();
    let currentYear = d.getFullYear();
    let numberOfYears = currentYear - birthYear;
    let numberOfMinutes = (numberOfYears * 365 * 24 * 60);
    let potato = `You are ${numberOfYears} years old and have lived for a total of ${numberOfMinutes} minutes.`;
    console.log(potato);
};
module.exports = a;