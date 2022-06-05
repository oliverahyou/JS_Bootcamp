const exp = require("express");
const app = exp();
const path = require("path");
const port = 3000;
const bp = require("body-parser");

app.use(bp());

let shopList = [
{
itemName: "potatoes",
price: 150
},
{
itemName: "apples",
price: 200
},
{
itemName: "oranges",
price: 300
},
{
itemName: "yoghurt",
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

app.post("/items", (req, res) => {
    shopList.push(req.body);
    res.send(shopList);
    console.log(req.body);
});

app.listen(port);