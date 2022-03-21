const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

// connect.db
mongoose.connect(
	process.env.DB_CONNECT,
	{useUnifiedTopology:true,useNewUrlParser:true},
	() => console.log("connected to db")
)

const productRoutes = require('./views/productRoute');
//console.log(productRoutes)
app.use("/api/products",productRoutes);

app.listen(1234,() =>{
	console.log("listening on port 1234")
})