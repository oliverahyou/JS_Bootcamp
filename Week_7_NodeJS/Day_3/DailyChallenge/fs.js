const fs = require("fs");

fs.readFile("./text.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let arr = data.split("");
        console.log(arr);
        let pos = 0;
        arr.forEach((val, i, arr) => {
            if(arr[i] === ">") {
                pos += 1;
            } else {
                pos -= 1;
            }; 
        });
        console.log(`Total teps: ${pos}`);
        
    };
});
