const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json({ message: "Product added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
   
    const products = await Product.find({ userId: req.user.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addProduct, getProducts };