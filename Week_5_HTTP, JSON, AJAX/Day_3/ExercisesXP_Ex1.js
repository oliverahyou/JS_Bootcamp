let num = prompt("Please enter a number.");
function compareToTen(num){
    return new Promise(function(resolve, reject){
        if (num > 10) {
            resolve("Promise resolved.")
        }
        else {
            reject("Promise rejected.")
        }
    })
}
compareToTen(num).then((value) => {console.log(`${num} is greater than 10. ${value}`)});
compareToTen(num).catch((value) => {console.log(`${num} is less or equal to 10. ${value}`)});
compareToTen(num).finally (() => {console.log("Operation completed.")})