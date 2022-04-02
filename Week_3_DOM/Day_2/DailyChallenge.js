let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let libButton = document.getElementById("lib-button");
let story = document.getElementById("story")

let arr = [noun.value, adjective.value, person.value, verb.value, ["in " + place.value]];
console.log(arr);

libButton.addEventListener("click", clickEvent);
function clickEvent(){
    console.log(noun.value, adjective.value, person.value, verb.value, place.value);
}
libButton.addEventListener("click", clickEvent2);
function clickEvent2(){
if (noun.value && adjective.value && person.value && verb.value && place.value != ""){
    createStory()
}
else {
    alert("Please fill all boxes!")
}
}
function createStory(){
    console.log(arr[2] + " " + arr[3] + " " + arr[1] + " " + arr[0] + " " + arr[4]);
}
let randomArrItem1 = Math.floor(Math.random() * 5);
let randomArrItem2 = Math.floor(Math.random() * 5);
let randomArrItem3 = Math.floor(Math.random() * 5);
let randomArrItem4 = Math.floor(Math.random() * 5);
let randomArrItem5 = Math.floor(Math.random() * 5);
let shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", shuffleEvent);
function shuffleEvent(){
    console.log(arr[randomArrItem1] + " " + arr[randomArrItem2] + " " + arr[randomArrItem3] + " " + arr[randomArrItem4] + " " + arr[randomArrItem5]);
}
