let hackathon_2 = false;

let beach = new Promise(function (resolve, reject){
    if (hackathon_2){
        resolve("We will go to the beach!");
    }
    else {
        reject("I will buy Damien some or make cakes :-)");
    }
})
beach.then(outing => {
    console.log(outing);
}).catch(manzer =>{
    console.log(manzer);
}).finally(() =>{
    console.log("I gave my best");
})