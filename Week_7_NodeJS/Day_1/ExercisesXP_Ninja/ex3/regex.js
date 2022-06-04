const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your full name ? ', function (fullName) {
    const str = fullName;
    const rgx = /^[A-Z][a-z]+\s[A-Z][a-z]+$/g
    const a = rgx.exec(str);
    if (a) {
        console.log(`Fullname: ${fullName}`)
    } else {
        console.log("Please make sure that there is only one space between the names and each name starts with a capital letter. Only in letters.")
    };
    rl.close();
});


