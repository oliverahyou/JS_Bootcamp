const port = 3000;
const exp = require("express");
const app = exp();
const path = require("path");
const cors = require("cors");

const db = require("knex")({
    client: "pg",
    connection: {
        host:"127.0.0.1",
        user: "postgres",
        password: "root",
        database:"login&register",
        port: 5432
    }
});
app.set("db", db);


app.use(exp.static("public"));

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile("index.html", ({ root: path.join(__dirname) }));
});
app.post("/login", (req, res) => {
    db("login")
    .insert
});
app.post("/register", (req, res) => {
    db("register")
    .insert({first_name: req.body.first_name , last_name: req.body.last_name, email: req.body.email, username: req.body.username, password: req.body.username, da})
    // res.send(req.body);
});

app.listen(port);