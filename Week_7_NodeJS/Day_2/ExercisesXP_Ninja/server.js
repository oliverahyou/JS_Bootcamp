const exp = require("express");
const app = exp();
const path = require("path");
const port = 3000;



let shopList = [
{
name: "potatoes",
price: 150
},
{
name: "apples",
price: 200
},
{
name: "oranges",
price: 300
},
{
name: "yoghurt",
price: 450
}
];

app.get("/items", (req, res) => {
    res.json(shopList);
});

app.get("/items/:id", (req, res) => {
    
    let a = Object.values(req.params);
    console.log(a);
    let b = parseFloat(a);
    console.log(b);
    let c = shopList[b];
    console.log(c);
    res.send(c);
});

app.get("/", (req, res) => {
    res.sendFile("items.html", { root: path.join(__dirname) });
})

app.post("/item", (req, res) => {
    
});

app.listen(port);