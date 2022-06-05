const fs = require("fs");

fs.writeFile("./text.txt", "Hello Mister Potato!", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Write operation complete!");
    };
});

fs.appendFile("./text.txt", " How is Mrs. Potato doing?", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Append successful!");
    };
});

fs.unlink("./text.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File 'text.txt' deleted succesfully!");
    };
});