let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


// 2
// function toJs(){
//     let morseObject = JSON.parse(morse);
//     console.log(morseObject);
//     return new Promise ((resolve, reject) => {
//         if (morse.length > 0) {
//             resolve("Promise resolved!");
//         }
//         else {
//             reject("Promise rejected!");
//         }
//     });
// }
// toJs().then((value) => {console.log(`"morse" object not empty. ${value}`)})
// .catch((value) => {console.log(`"morse" object is empty. ${value}`)})
// .finally(() => {console.log("Operation complete!")});

// 3
let morseJS = JSON.parse(morse);
function toMorse(morseJS){
    let userInput = prompt("Please enter a word or a sentence.");
    let userInputArr = userInput.split("");
    
    return new Promise ((resolve, reject) => {
        for (let x in morseJS){
            if (userInputArr.includes(x)){
                let morseCode = morseJS[x];
                resolve(console.log(morseCode));
            }
            else {
                reject("Promise rejected!");
            }
        }
    })
}
toMorse(morseJS).then((value) => {console.log(`Promise resolved! Morse code: ${value}`)})
.catch((value) => {console.log(`${value} Invalid character used. Please only use lowercase letters.`)})
.finally(() => {console.log("Process complete.")})