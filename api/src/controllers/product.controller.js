const db = require('../models');
const Product = db.product;

class ProductController {
  async findOne(req, res) {
    let id = req.params.id
    const product = await Product.findById({_id: id})
    res.send(product)
  }


  async findRelated(req, res) {
    let id = req.params.id
    const products = await Product.find({_id: {$ne: id}}).limit(5)
    res.send(products)
  }

}

module.exports = new ProductController();
