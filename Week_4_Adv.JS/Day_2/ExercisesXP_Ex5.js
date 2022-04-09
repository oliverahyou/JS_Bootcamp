// Part I
// Part 1
let sizeRequest = prompt("What size of beverage do you want? Small, medium or large?");
let size = sizeRequest.toLocaleLowerCase();
console.log(size);

// Part 2-3
// function makeJuice(size){
//     function addIngredients(){
//         let threeFruitsCombo = prompt("What 3 fruits would you like to mix?");
//         console.log(`The client wants a ${size} juice, containing ${threeFruitsCombo}.`);
//     }
//     addIngredients()
// }
// makeJuice(size);

// Part II

function makeJuice(size){
    let ingredients = [];
    function addIngredients(){
        let threeFruitsCombo = prompt("What 3 fruits would you like to mix?");
        ingredients.push(threeFruitsCombo);
        console.log(ingredients);
        
        function displayJuice(){
            console.log(`The client wants a ${size} juice, containing ${ingredients}.`);   
        }
        displayJuice();    
    } 
    addIngredients();
    addIngredients();
    
    
}
makeJuice(size);