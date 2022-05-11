const b = 5;

let newNum = require ('./main.js');
let sum = newNum.number + b;
console.log(sum);

let http = require("http");

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type','text/html');
    res.writeHead(200);
    res.end("My module is: " + sum + "<h1>Hi there at the frontend!</h1>");
    console.log("I'm listening...");
}).listen(3000);

let dateImport = require("./main.js");
let dateAndTime = dateImport.date;

let http2 = require("http");
const server2 = http2.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`The date and time are currently: ${dateAndTime}`)
    console.log("I'm listening...")
}).listen(8080);