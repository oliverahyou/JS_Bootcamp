// const http = require('http');
var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

app.get("/:id", (req, res) => {
    res.send(req.params);
    console.log(req.params)
   });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Run on Port http://localhost:3000/
//Run Terminal node server.js