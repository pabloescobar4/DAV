const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
id:String,
author:String,
book_name:String,
pages:Number,
published_year:Number

})

module.exports = mongoose.model("Product" ,productSchema);







// _id
// :
// 623235aa72158b82e255f3ab
// ObjectId
