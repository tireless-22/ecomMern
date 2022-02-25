const express = require("express");
const app = express();
const products=require("./data/products")
const cors = require("cors");
app.use(cors());
app.use(express());


app.post("/", (req, res) => {
	res.send("api is running");
})


app.get("/api/products", (req, res) => {
	res.json(products);
})

app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	console.log(product);
	res.json(product);

})


app.listen (3001,()=>{
	console.log("server is running");
})



