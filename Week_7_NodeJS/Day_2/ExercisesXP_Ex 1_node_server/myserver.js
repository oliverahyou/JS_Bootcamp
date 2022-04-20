const http = require ('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1>This is the first paragraph</h1>')
    res.write('<h1>This is the second paragraph</h1>')
    res.write('<p>This is the third paragraph</p>')
    res.end();

})
server.listen(3000);