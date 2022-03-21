const Product = '../models/Product.js';

//get all products from
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};
//single Product
const product_single = async (req, res) => {};
// add new product
const product_add = async (req, res) => {};
//update product
const product_update = async (req, res) => {
  //   try {
  //     const product = {
  //       id: req.body.id,
  //       author: req.body.author,
  //       book_name: req.body.book_name,
  //       pages: req.body.pages,
  //       published_year: req.body.published_year,
  //     };
  //     const updatedProduct = await Product.findByIdAndUpdate(
  //       { _id: req.Params.id },
  //       product
  //     );
  //     res.json(updatedProduct);
  //   } catch (error) {
  //     res.json({ message: error });
  //   }
};
// delete that product
const product_delete = async (req, res) => {};

module.exports = {
  product_all,
  product_single,
  product_update,
  product_delete,
  product_add,
};
