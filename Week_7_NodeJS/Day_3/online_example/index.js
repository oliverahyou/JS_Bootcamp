const exp = require("express");
const app = exp();
const router = require("./routes");

app.use(router);
app.use(exp.json());
app.listen(3000, () => {
    console.log("Listening to port 3000...");
});