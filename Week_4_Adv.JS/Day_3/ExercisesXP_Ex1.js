// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// Prediction: result = ["bread", "carrot", "potato", "chicken", "apple", "orange"]; 
// Output = Prediction
console.log(result);


// ------2------
const country = "USA";
console.log([...country]);
// Prediction: country = "USA";
//Output = "U", "S", "A";

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output = [undefined, undefined];