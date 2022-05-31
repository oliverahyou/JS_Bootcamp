const exp = require('express');
const app = exp();
const port = 3000;

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

app.get("/form", function(req, res){
    res.sendFile(__dirname, "/form.html");
});
app.listen(port, () => {
    console.log("App listening on port 3000...");
});