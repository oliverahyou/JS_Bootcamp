const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require("http");
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    let jsonMessage = JSON.stringify(user);
    res.end(jsonMessage);
})

server.listen(8080);
