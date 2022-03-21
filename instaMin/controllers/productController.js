const Product = require('../model/Product');
const schedule = require('node-schedule');
// Get All products
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

const sDate = new Date('2022-03-17T21:23:47.000+5:30');

let str = 'textOne';

const job = schedule.scheduleJob('*/3 * * * * *', function () {
  // console.log('The answer to life, the universe, and everything!');

  var aw = new Date().toString();
  //console.log(aw)
  // var n =aw[i]

  if (aw) {
    // str.forEach(element => console.log(element.split("").reverse().join("")));
    //		console.log(str.split("").reverse().join(""))
  }

  job.cancel();
});

// const y =schedule.scheduleJob(sDate, () =>{

// })

// Single product
const product_details = async (req, res) => {
  try {
    // for(let i = 0; i < 5; i++) {

    //     console.log(i)
    //}
    var query = {$or:[{id: { $gt: 0 }},{id: { $eq: 1 }}]};
//console.log(query);
    const product = await Product.findOne(query);

    const sDate = new Date(product.dateTime);

    const job = schedule.scheduleJob(sDate,function () {
      // console.log('The answer to life, the universe, and everything!');

      var aw = new Date().toString();
      //console.log(aw)
      // var n =aw[i]
     
      if (aw) {
        // str.forEach(element => console.log(element.split("").reverse().join("")));
        //		console.log(str.split("").reverse().join(""))
       // console.log(product.id +1)
        console.log(product.text.split("").reverse().join(""));
      }

      job.cancel();
    });
    res.json(product);
    
  } catch (error) {
    res.json({ message: error });
  }
};

// Add New product
const product_create = async (req, res) => {
  const product = new Product({
    id: req.body.id,
    author: req.body.author,
    book_name: req.body.book_name,
    pages: req.body.pages,
    published_year: req.body.published_year,
  });

  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update product
const product_update = async (req, res) => {
  try {
    const product = {
      id: req.body.id,
      author: req.body.author,
      book_name: req.body.book_name,
      pages: req.body.pages,
      published_year: req.body.published_year,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  product_all,
  product_details,
  product_create,
  product_update,
  product_delete,
};
