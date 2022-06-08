const exp = require("express");
const app = exp();
const port = 3000;

app.use(exp.static('public'));

app.set("view engine", "ejs");
document.getElementsByTagName
let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",
        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
];

app.get("/", (req, res) => {
    res.render("index", { nameRestaurant: "Papa Pizza", pizzaMenu: menu });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => { console.log("Listening on port 3000!") });