const exp = require('express');
const app = exp();
const bp = require("body-parser");
const path = require("path");
const port = 3001;

app.use(bp());

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./")})
})

app.post("/", (req, res) => {
    res.send(JSON.stringify(req.body));
    console.log(req.body);
})

app.listen(port);

