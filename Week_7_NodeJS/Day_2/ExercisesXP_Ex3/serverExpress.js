const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.end('<h1>Potato is good!</h1>');
});


app.listen(3000);
