// 1
let promise = new Promise (resolve => resolve(3));

// 2
let promise2 = new Promise (reject => reject("Boo!"));

promise.then(value =>{
    console.log(value);
}).catch(value => {
    console.log(value, "Ooops something went wrong");
})