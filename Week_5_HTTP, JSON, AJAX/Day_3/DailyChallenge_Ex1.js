// 2
let arr = ["I", "love", "potato", "because", "potato"];

function makeAllCaps(arr){
    return new Promise(function(resolve, reject){
        if (typeof arr[0] === "string" && typeof arr[1] === "string" && typeof arr[2] === "string" && typeof arr[3] === "string" && typeof arr[4] === "string"){
            resolve("Promise solved")
            let arrCaps = arr.map(value => value.toUpperCase());
            console.log(arrCaps);
        }
        else {
            reject("Promise rejected!");
        }
    })
}
makeAllCaps(arr).then((value) => {console.log(`"${arr[0]}" is a string. "${arr[1]}" is a string. "${arr[2]}" is a string."${arr[3]}" is a string. "${arr[4]}" is a string. "${arr[5]}" is a string. ${value}!`)})
.catch((value) => {console.log(`Not all elements in 'arr' are strings. ${value}`)})
.finally(() => {console.log("Operation complete.")});

// 3
let arrCaps = ["I", "LOVE", "POTATO", "BECAUSE", "POTATO"];
function sortWords(arrCaps){
    return new Promise(function(resolve, reject){
        if (arrCaps.length > 4){
            resolve("Promise solved!")
            let arrCapsSorted = arrCaps.sort();
            console.log(arrCapsSorted);
        }
        else {
            reject("Promise rejected!")
        }
    })
}
sortWords(arrCaps).then((value) => {console.log(`The length of arrCaps is greater 4. ${value}!`)})
.catch ((value) => {console.log(`The length of arrCaps is less or equal to 4. ${value}`)})
.finally (() => {console.log("Operation 2 complete.")})