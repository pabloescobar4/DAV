const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id:Number,
  text:String,
  dateTime:String,
});

module.exports = mongoose.model("Product", productSchema);
