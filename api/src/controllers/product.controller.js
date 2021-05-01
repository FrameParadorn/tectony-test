const db = require('../models');
const Product = db.product;

class ProductController {
  async findAll(req, res) {
    const products = await Product.find({})
    res.send(products)
  }
}

module.exports = new ProductController();
