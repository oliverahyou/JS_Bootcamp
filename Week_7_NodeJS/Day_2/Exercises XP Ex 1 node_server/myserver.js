const http = require ('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(<html><body><h1>This is my first response</h1></body></html>);
})
server.listen(3000);