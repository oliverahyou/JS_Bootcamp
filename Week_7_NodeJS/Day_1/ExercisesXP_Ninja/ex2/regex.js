const string = "k5k3q2g5z6x9bn";
const regex = /[a-z](\d)[a-z](\d)[a-z](\d)[a-z](\d)[a-z](\d)[a-z](\d)[a-z][a-z]/g;
const a = regex.exec(string);
console.log(a);
if (a){
    const numOne = a[1];
    const numTwo = a[2];
    const numThree = a[3];
    const numFour = a[4];
    const numFive = a[5];
    const numSix = a[6];

    console.log(numOne);
    console.log(numTwo);
    console.log(numThree);
    console.log(numFour);
    console.log(numFive);
    console.log(numSix);
    
    const numbers = numOne.concat(numTwo, numThree, numFour, numFive, numSix);
    console.log(numbers);
}else {
    console.log("No match!");
}

