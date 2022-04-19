const b = 5;

let newNum = require ('./main.js');
let sum = newNum.number + b;
console.log(sum);

let http = require("http");

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type','text/html')
    res.writeHead(200)
    res.end("My module is: " + sum + "<h1> Hi there at the frontend </h1>")
    console.log("Request received.")
}).listen(3000);