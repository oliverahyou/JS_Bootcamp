const exp = require('express');
const app = exp();
const path = require("path");
const bp = require("body-parser");
const port = 3000;

app.use(bp());

app.get("/", (req, res) => {
    res.send("Potato is good!")
})

app.get("/aboutMe/:hobby", (req, res) => {
    
    if (isNaN(req.params.hobby)){
        res.send("Hobby: " + req.params.hobby);
    } else {
        res.send("Error! Hobby can only be a string.");
    }
});
app.use(exp.static('public'));
app.get("/pic", (req, res) => {
    res.send('<img src="potato.jpeg" alt="Image of a potato">');
});

app.get("/form", (req, res) => {
    res.sendFile("form.html", {root: path.join(__dirname, "./public")});
});
app.post("/formData", (req, res) => {
    res.send(req.body);
    console.log(req.body);
})
app.listen(port, () => {
    console.log("App listening on port 3000...");
});