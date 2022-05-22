const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));

app.use(cors());

app.get("/aboutMe/:hobby", (req, res) => {
    
    if (isNaN(req.params.hobby)){
        res.send("Hobby: " + req.params["hobby"]);
    } else {
        res.send("Error! Hobby can only be a string.");
    }
});
app.get("/pic", (req, res) => {
    let body = document.body;
    let img = document.createElement("image");
    img.setAttribute("src", "potato.jpeg");
    body.appendChild(img);
    res.send(img);
});
app.listen(3000, () => {
    console.log("App listening on port 3000...");
});