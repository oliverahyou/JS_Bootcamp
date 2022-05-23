const express = require("express");
const app = express();

app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

app.get("/aboutMe/:hobby", (req, res) => {
    
    if (isNaN(req.params.hobby)){
        res.send("Hobby: " + req.params["hobby"]);
    } else {
        res.send("Error! Hobby can only be a string.");
    }
});
app.get("/pic", (req, res) => {
    
});
app.listen(3000, () => {
    console.log("App listening on port 3000...");
});