// console.log(This is the Express Framework)
const express = require ("express")
const app = express();

// If path not specified, applies for all requests.
app.use((req, res, next) => {
    console.log("Hello middleware 1!");
    next();
})
app.use((req, res, next) => {
    console.log("Hello middleware 2!");
    next(); //Goes to route, if not present, request/reponse cycle stops there.
})

app.get("/", function(req, res){
    console.log("Hi");
    res.send("Hello World!");
})
app.get("/about", (req, res) => { res.send("This is me!")})

// Parameter
app.get("/tutorial/:notion", (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`Tutorial about ${req.params.notion}!`)
})
app.get("products/:product", (req, res =>{
   console.log("Product requested:", req.params.product);
    //Get product from database using the product ID and send information
    res.send(`Product requested ${req.params.product}`) 
}))
app.get("/products", (req, res) => {
    console.log(req.query);
})
app.listen(5000);