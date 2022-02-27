
import express from "express"
const app = express();
import cors from "cors"
import products from "./data/products.js"
import colors from "colors"
// const products=require("./data/products")

import connectDB from "./db.js"
app.use(cors());
app.use(express());
import dotenv from "dotenv"

connectDB();


dotenv.config();
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

const PORT = process.env.PORT||3001;


app.listen (PORT,()=>{
	console.log("server is running");
})



