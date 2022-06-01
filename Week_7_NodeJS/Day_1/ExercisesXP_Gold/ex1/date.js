// currentDate = "31 May 15:40"
// timeUntilMidnight = "8hrs 20min"
// monthsRemaining = 6
// daysRemaining = ((3 * 30) + (4 * 31)) = (90 + 124) = 214
let hoursRemaining = "08:20:00 hours";
let daysRemaining = "214 days";
let timeLeft = `The 1st January is in ${daysRemaining} and ${hoursRemaining}.`;

exports.hoursRemaining = () => {
    console.log(hoursRemaining);
};
exports.daysRemaining = () => {
    console.log(daysRemaining);
};
exports.timeLeft = () => {
    console.log(timeLeft);
};