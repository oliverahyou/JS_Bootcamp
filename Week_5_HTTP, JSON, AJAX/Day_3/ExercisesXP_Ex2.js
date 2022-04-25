// 1
// let promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
        // resolve("Promise resolved successfully.");
        // reject("Project rejected.")
    // }, 4000);
// });
// promise.then(value =>{
    // console.log(value);
// }).catch(value => {
    // console.log(value);
// })

// 2
let promise = new Promise (resolve => resolve("Promise resolved successfully."));
promise.then(value =>{
    console.log(value);
}).catch(value => {
    console.log(value, "Ooops something went wrong");
})